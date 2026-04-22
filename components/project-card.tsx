"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: {
    title: string;
    eyebrow: string;
    duration: string;
    description: string;
    impact: string;
    tech: string[];
    links: {
      live: string;
      repo: string;
    };
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="group grid min-h-[344px] content-between rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-line-soft transition-colors duration-300 hover:border-ink-900"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <div className="mb-5 flex items-center justify-between gap-4 text-xs text-ink-500">
          <span className="eyebrow normal-case tracking-[0.12em]">{project.eyebrow}</span>
          <span>{project.duration}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-ink-950">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-ink-600">{project.description}</p>
        <p className="mt-4 border-l border-ink-300 pl-4 text-sm font-medium leading-6 text-ink-900">
          {project.impact}
        </p>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-lg border border-ink-200 px-2.5 py-1 text-xs text-ink-600">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2">
          <a
            href={project.links.repo}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-700 transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-ink-50"
            aria-label={`Request repository details for ${project.title}`}
          >
            <Github size={17} />
          </a>
          <a
            href={project.links.live}
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-ink-950 bg-ink-950 px-4 py-2 text-sm font-medium text-ink-50 transition-colors hover:bg-ink-800"
          >
            Discuss project <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
