import { ArrowDown, Award, CheckCircle2, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { ContactFooter } from "@/components/contact-footer";
import { ProjectCard } from "@/components/project-card";
import { SectionReveal } from "@/components/section-reveal";
import { SiteHeader } from "@/components/site-header";
import { awards, certifications, education, profile, projects, skillGroups, work } from "@/lib/profile";

export default function Home() {
  return (
    <main id="top" className="min-h-screen text-ink-950">
      <SiteHeader />

      <section className="container-grid pb-16 pt-20 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <div>
            <p className="eyebrow">{profile.role}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">{profile.summary}</p>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-500">Worked across</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.companies.map((company) => (
                  <span key={company} className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 text-sm font-medium text-ink-800">
                    {company}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2 text-sm text-ink-600">
              {profile.stack.map((item, index) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5">{item}</span>
                  {index < profile.stack.length - 1 ? <span className="text-ink-300">/</span> : null}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-ink-950 px-5 py-3 text-sm font-medium text-ink-50 transition-colors hover:bg-ink-800"
              >
                View work <ArrowDown size={16} />
              </a>
              <a
                href={profile.linkedin}
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-ink-300 bg-ink-50 px-5 py-3 text-sm font-medium text-ink-800 transition-colors hover:border-ink-950 hover:text-ink-950"
              >
                LinkedIn <ExternalLink size={16} />
              </a>
              <a
                href={profile.resume}
                download
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-ink-300 bg-ink-50 px-5 py-3 text-sm font-medium text-ink-800 transition-colors hover:border-ink-950 hover:text-ink-950"
              >
                Resume <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionReveal id="work" className="container-grid py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_1fr]">
          <div>
            <p className="eyebrow">Work</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Enterprise delivery with measurable outcomes.</h2>
          </div>

          <div className="grid gap-4">
            {work.map((item) => (
              <article key={`${item.company}-${item.role}`} className="rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-line-soft">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-ink-950">{item.role}</h3>
                    <p className="mt-1 text-sm text-ink-600">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <p className="rounded-lg border border-ink-200 px-3 py-1.5 text-xs font-medium text-ink-600">{item.period}</p>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-6 text-ink-600">{item.description}</p>
                <ul className="mt-6 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-ink-700">
                      <CheckCircle2 size={17} className="mt-1 shrink-0 text-ink-950" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="projects" className="container-grid py-16 sm:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Selected systems across banking, compliance, and predictive workflows.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-ink-600">
            Enterprise repositories are private; project conversations route through contact for context and access.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal id="skills" className="container-grid py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_1fr]">
          <div>
            <p className="eyebrow">Technical Skills</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">A focused backend toolkit with practical delivery range.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-ink-200 bg-ink-50 p-5 shadow-line-soft">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-950">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-lg bg-ink-100 px-3 py-1.5 text-sm text-ink-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="container-grid py-16 sm:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-line-soft">
            <div className="flex items-center gap-3">
              <Award size={19} />
              <h2 className="text-lg font-semibold">Education</h2>
            </div>
            <div className="mt-6 grid gap-5">
              {education.map((item) => (
                <div key={item.degree}>
                  <p className="font-medium text-ink-950">{item.degree}</p>
                  <p className="mt-1 text-sm leading-6 text-ink-600">{item.school}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-500">{item.year}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-ink-200 bg-ink-50 p-6 shadow-line-soft">
            <div className="flex items-center gap-3">
              <ShieldCheck size={19} />
              <h2 className="text-lg font-semibold">Certifications & Awards</h2>
            </div>
            <div className="mt-6 grid gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-500">Certifications</p>
                <div className="mt-3 grid gap-3">
                  {certifications.map((item) => (
                    <p key={item} className="rounded-lg bg-ink-100 px-4 py-3 text-sm text-ink-700">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-500">Awards</p>
                <div className="mt-3 grid gap-3">
                  {awards.map((item) => (
                    <p key={item} className="rounded-lg bg-ink-100 px-4 py-3 text-sm text-ink-700">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </SectionReveal>

      <ContactFooter />
    </main>
  );
}
