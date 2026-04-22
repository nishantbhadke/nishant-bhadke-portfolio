"use client";

import { Activity, Check, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import { prototypeViews } from "@/lib/profile";

export function PrototypePanel() {
  const [activeId, setActiveId] = useState(prototypeViews[0].id);

  const active = useMemo(
    () => prototypeViews.find((item) => item.id === activeId) ?? prototypeViews[0],
    [activeId]
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[0.34fr_1fr]">
      <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {prototypeViews.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className={`focus-ring flex min-w-[160px] items-center justify-between rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors lg:min-w-0 ${
              active.id === item.id
                ? "border-ink-950 bg-ink-950 text-ink-50"
                : "border-ink-200 bg-ink-50 text-ink-700 hover:border-ink-950 hover:text-ink-950"
            }`}
          >
            <span>{item.label}</span>
            <Layers3 size={16} />
          </button>
        ))}
      </div>

      <article className="rounded-lg border border-ink-200 bg-ink-50 p-5 shadow-line-soft sm:p-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <p className="eyebrow normal-case tracking-[0.12em]">Executable demo prototype</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink-950">{active.title}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-600">{active.summary}</p>
          </div>
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-ink-100 text-ink-950">
            <Activity size={18} />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {active.metrics.map((metric) => (
            <div key={metric} className="rounded-lg border border-ink-200 bg-white px-4 py-3">
              <p className="text-sm font-medium leading-5 text-ink-900">{metric}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {active.steps.map((step, index) => (
            <div key={step} className="flex min-h-16 items-start gap-3 rounded-lg bg-ink-100 p-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-950 text-xs font-semibold text-ink-50">
                {index + 1}
              </span>
              <span className="text-sm leading-6 text-ink-700">{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-ink-200 pt-5 text-sm text-ink-600 sm:flex-row sm:items-center">
          <span className="flex items-center gap-2">
            <Check size={16} className="text-ink-950" />
            Static, dependency-light, and responsive by default.
          </span>
          <a href="#contact" className="focus-ring rounded-lg px-0 py-1 font-medium text-ink-950 underline-offset-4 hover:underline">
            Discuss this build
          </a>
        </div>
      </article>
    </div>
  );
}
