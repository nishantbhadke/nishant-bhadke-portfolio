import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/profile";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone
  },
  {
    label: "LinkedIn",
    value: "nishant-bhadke-983837185",
    href: profile.linkedin,
    icon: Linkedin
  }
];

export function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-ink-200 bg-ink-950 text-ink-50">
      <div className="container-grid py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow text-ink-400">Contact</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              Available for backend, API, and BFSI platform engineering roles.
            </h2>
            <p className="mt-5 flex items-center gap-2 text-sm text-ink-300">
              <MapPin size={16} />
              {profile.location} | Open to relocation
            </p>
          </div>

          <div className="grid gap-3">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="focus-ring group flex items-center justify-between rounded-lg border border-ink-800 bg-ink-900 px-4 py-4 transition-colors hover:border-ink-50"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Icon size={18} className="shrink-0 text-ink-400" />
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.16em] text-ink-500">{item.label}</span>
                      <span className="block truncate text-sm text-ink-100">{item.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 text-ink-500 transition-colors group-hover:text-ink-50" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row">
          <p>Built with Next.js, Tailwind CSS, Framer Motion, and Lucide icons.</p>
          <p>© {new Date().getFullYear()} Nishant Bhadke</p>
        </div>
      </div>
    </footer>
  );
}
