// DânBot — client gọi thẳng Anthropic Claude API từ trình duyệt (BYOK).
// Người dùng tự nhập API key; không cần backend.

const API_URL = "https://api.anthropic.com/v1/messages";
const API_VERSION = "2023-06-01";

// Theo hướng dẫn: dùng claude-opus-5 trừ khi người dùng chỉ định model khác.
export const AI_MODEL = "claude-opus-5";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AiQuizQuestion = {
  question: string;
  options: { A: string; B: string; C: string; D: string };
  correct: "A" | "B" | "C" | "D";
  concept: string;
  explanation: string;
};

function baseHeaders(apiKey: string): HeadersInit {
  return {
    "content-type": "application/json",
    "x-api-key": apiKey,
    "anthropic-version": API_VERSION,
    // Cho phép gọi trực tiếp từ trình duyệt (bỏ qua CORS)
    "anthropic-dangerous-direct-browser-access": "true",
  };
}

function bodyFor(
  system: string,
  messages: ChatMessage[],
  maxTokens: number,
  stream: boolean
) {
  return JSON.stringify({
    model: AI_MODEL,
    max_tokens: maxTokens,
    // Tắt thinking ở effort mặc định để phản hồi nhanh, tiết kiệm token trên key của người dùng.
    thinking: { type: "disabled" },
    system,
    messages,
    stream,
  });
}

async function readError(res: Response): Promise<string> {
  try {
    const data = await res.json();
    return data?.error?.message || `Lỗi ${res.status}`;
  } catch {
    return `Lỗi ${res.status}`;
  }
}

// Kiểm tra kết nối — gọi 1 request nhỏ để xác thực key.
export async function testConnection(apiKey: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: baseHeaders(apiKey),
      body: bodyFor("Bạn là trợ lý.", [{ role: "user", content: "OK" }], 8, false),
    });
    if (!res.ok) return { ok: false, error: await readError(res) };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Không kết nối được" };
  }
}

// Gọi 1 lần, trả về toàn bộ text (dùng cho chấm bài, tạo quiz).
export async function complete(
  apiKey: string,
  system: string,
  messages: ChatMessage[],
  maxTokens = 2048
): Promise<string> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: baseHeaders(apiKey),
    body: bodyFor(system, messages, maxTokens, false),
  });
  if (!res.ok) throw new Error(await readError(res));
  const data = await res.json();
  if (data.stop_reason === "refusal") {
    return "Xin lỗi, mình không thể trả lời yêu cầu này.";
  }
  const text = (data.content || [])
    .filter((b: { type: string }) => b.type === "text")
    .map((b: { text: string }) => b.text)
    .join("");
  return text || "(không có nội dung)";
}

// Trích mảng JSON từ text (phòng khi model thêm chữ thừa).
function extractJsonArray(text: string): string {
  let t = text.trim();
  // bỏ code fence nếu có
  t = t.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  const start = t.indexOf("[");
  const end = t.lastIndexOf("]");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Không đọc được đề từ AI");
  }
  return t.slice(start, end + 1);
}

function isValidQuestion(q: unknown): q is AiQuizQuestion {
  if (!q || typeof q !== "object") return false;
  const o = q as Record<string, unknown>;
  const opt = o.options as Record<string, unknown> | undefined;
  return (
    typeof o.question === "string" &&
    !!opt &&
    typeof opt.A === "string" &&
    typeof opt.B === "string" &&
    typeof opt.C === "string" &&
    typeof opt.D === "string" &&
    ["A", "B", "C", "D"].includes(o.correct as string) &&
    typeof o.explanation === "string"
  );
}

// Sinh bộ câu hỏi trắc nghiệm bằng AI.
export async function generateQuiz(
  apiKey: string,
  system: string,
  topic: string,
  count: number
): Promise<AiQuizQuestion[]> {
  const prompt = `Tạo ${count} câu hỏi trắc nghiệm ôn tập về chủ đề: "${topic}".

Yêu cầu:
- Mỗi câu có đúng 4 lựa chọn A, B, C, D và chỉ 1 đáp án đúng.
- Bám sát nguồn kiến thức đã cho; không hỏi ngoài phạm vi bài học.
- Đa dạng: có câu khái niệm, có câu tình huống vận dụng.
- "concept" là nhãn ngắn gọn của khái niệm liên quan (ví dụ: "Của dân", "Pháp quyền", "Kiểm soát quyền lực").
- "explanation" giải thích ngắn gọn vì sao đáp án đúng.

Chỉ trả về DUY NHẤT một mảng JSON hợp lệ (không markdown, không chữ thừa) theo schema:
[{"question":"...","options":{"A":"...","B":"...","C":"...","D":"..."},"correct":"A","concept":"...","explanation":"..."}]`;

  const raw = await complete(
    apiKey,
    system,
    [{ role: "user", content: prompt }],
    Math.min(4096, 700 + count * 320)
  );

  let parsed: unknown;
  try {
    parsed = JSON.parse(extractJsonArray(raw));
  } catch {
    throw new Error("AI trả về đề không hợp lệ. Thử lại giúp mình nhé.");
  }
  if (!Array.isArray(parsed)) throw new Error("AI trả về đề không hợp lệ.");
  const valid = parsed.filter(isValidQuestion);
  if (valid.length === 0) throw new Error("Không sinh được câu hỏi. Thử lại.");
  return valid;
}

// Streaming — gọi onText mỗi khi có delta text mới.
export async function streamChat(
  apiKey: string,
  system: string,
  messages: ChatMessage[],
  onText: (delta: string) => void,
  opts: { maxTokens?: number; signal?: AbortSignal } = {}
): Promise<void> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: baseHeaders(apiKey),
    body: bodyFor(system, messages, opts.maxTokens ?? 2048, true),
    signal: opts.signal,
  });

  if (!res.ok) throw new Error(await readError(res));
  if (!res.body) throw new Error("Không nhận được luồng dữ liệu");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith("data:")) continue;
      const payload = trimmed.slice(5).trim();
      if (!payload || payload === "[DONE]") continue;
      try {
        const evt = JSON.parse(payload);
        if (
          evt.type === "content_block_delta" &&
          evt.delta?.type === "text_delta" &&
          typeof evt.delta.text === "string"
        ) {
          onText(evt.delta.text);
        } else if (evt.type === "error") {
          throw new Error(evt.error?.message || "Lỗi luồng dữ liệu");
        }
      } catch {
        // Bỏ qua dòng không parse được
      }
    }
  }
}
