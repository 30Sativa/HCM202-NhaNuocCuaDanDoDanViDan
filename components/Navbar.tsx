"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AiStatusButton from "./ai/AiStatusButton";

const links = [
  { href: "/learn", label: "Học" },
  { href: "/#khai-niem", label: "Khái niệm" },
  { href: "/mindmap", label: "Mindmap" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/quiz", label: "Quiz" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/#ve-du-an", label: "Giới thiệu" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5 md:px-8">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="overflow-hidden rounded-full ring-1 ring-ink/10">
            <Image
              src="/logo.png"
              alt="Tư tưởng Hồ Chí Minh"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-cover object-[center_30%]"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-base font-bold text-primary">
              Tư tưởng Hồ Chí Minh
            </span>
            <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.15em] text-ink-soft sm:block">
              Của dân · Do dân · Vì dân
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`rounded-full px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                    active
                      ? "bg-primary text-paper"
                      : "text-ink-soft hover:bg-paper-2 hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <AiStatusButton />
          <button
            className="md:hidden"
            aria-label="Mở menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-ink/10 px-5 py-3 md:hidden">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 font-mono text-sm uppercase tracking-wider ${
                    active ? "bg-primary text-paper" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
