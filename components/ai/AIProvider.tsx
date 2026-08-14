"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { testConnection } from "@/lib/ai";

const STORAGE_KEY = "danbot_api_key";

export type AIStatus = "unconfigured" | "testing" | "ready" | "error";

type AIContextValue = {
  apiKey: string | null;
  status: AIStatus;
  errorMsg: string | null;
  ready: boolean;
  // Ngữ cảnh trang hiện tại
  topic: string | null;
  setTopic: (t: string | null) => void;
  // Panel DânBot
  open: boolean;
  setOpen: (v: boolean) => void;
  // Hỏi giới hạn theo 1 mục (sơ đồ tư duy)
  scoped: { title: string; content: string } | null;
  setScoped: (s: { title: string; content: string } | null) => void;
  askAbout: (title: string, content: string) => void;
  // Quản lý key
  connect: (key: string) => Promise<boolean>;
  disconnect: () => void;
};

const AIContext = createContext<AIContextValue | null>(null);

export function useAI() {
  const ctx = useContext(AIContext);
  if (!ctx) throw new Error("useAI phải dùng trong <AIProvider>");
  return ctx;
}

export function AIProvider({ children }: { children: ReactNode }) {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [status, setStatus] = useState<AIStatus>("unconfigured");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [topic, setTopic] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [scoped, setScoped] = useState<{ title: string; content: string } | null>(
    null
  );

  const askAbout = useCallback((title: string, content: string) => {
    setScoped({ title, content });
    setTopic(title);
    setOpen(true);
  }, []);

  // Nạp key đã lưu
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setApiKey(saved);
        setStatus("ready");
      }
    } catch {
      /* localStorage không khả dụng */
    }
  }, []);

  const connect = useCallback(async (key: string) => {
    const trimmed = key.trim();
    if (!trimmed) return false;
    setStatus("testing");
    setErrorMsg(null);
    const result = await testConnection(trimmed);
    if (result.ok) {
      try {
        localStorage.setItem(STORAGE_KEY, trimmed);
      } catch {
        /* ignore */
      }
      setApiKey(trimmed);
      setStatus("ready");
      return true;
    }
    setStatus("error");
    setErrorMsg(result.error ?? "Không kết nối được");
    return false;
  }, []);

  const disconnect = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setApiKey(null);
    setStatus("unconfigured");
    setErrorMsg(null);
  }, []);

  return (
    <AIContext.Provider
      value={{
        apiKey,
        status,
        errorMsg,
        ready: status === "ready" && !!apiKey,
        topic,
        setTopic,
        open,
        setOpen,
        scoped,
        setScoped,
        askAbout,
        connect,
        disconnect,
      }}
    >
      {children}
    </AIContext.Provider>
  );
}

// Component nhỏ để các trang khai báo ngữ cảnh học tập hiện tại.
export function AiTopic({ title }: { title: string }) {
  const { setTopic } = useAI();
  useEffect(() => {
    setTopic(title);
    return () => setTopic(null);
  }, [title, setTopic]);
  return null;
}
