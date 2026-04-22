"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/profile";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("work");

  useEffect(() => {
    const sections = profile.navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/80 bg-ink-50/82 backdrop-blur-xl">
      <div className="container-grid flex h-16 items-center justify-between">
        <a href="#top" className="focus-ring -ml-2 rounded-lg px-2 py-2 text-sm font-semibold text-ink-950">
          NB
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {profile.navigation.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
                  active === id
                    ? "bg-ink-950 text-ink-50"
                    : "text-ink-600 hover:bg-ink-100 hover:text-ink-950"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-900 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <nav className="container-grid border-t border-ink-200 py-3 md:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {profile.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100 hover:text-ink-950"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
