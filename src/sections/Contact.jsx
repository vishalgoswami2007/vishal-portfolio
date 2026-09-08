import { ArrowUpRight, Mail, MapPin, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "vishal.goswami.dev@gmail.com",
    href: "mailto:vishal.goswami.dev@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "vishalgoswami2007",
    href: "https://github.com/vishalgoswami2007",
    icon: null,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Vishal Goswami",
    href: "https://www.linkedin.com/in/vishal-goswami-81422136b",
    icon: null,
    external: true,
  },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.12c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.28-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.77 1.03.77 2.08v3.08c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 2H3.553C2.695 2 2 2.678 2 3.514v16.972C2 21.322 2.695 22 3.553 22h16.894c.858 0 1.553-.678 1.553-1.514V3.514C22 2.678 21.305 2 20.447 2ZM7.934 18.75H4.987V9.198h2.947v9.552ZM6.46 7.893a1.708 1.708 0 1 1 0-3.416 1.708 1.708 0 0 1 0 3.416ZM18.75 18.75h-2.94v-4.647c0-1.108-.02-2.534-1.545-2.534-1.547 0-1.784 1.208-1.784 2.454v4.727H9.54V9.198h2.823v1.305h.04c.393-.744 1.354-1.527 2.786-1.527 2.98 0 3.561 1.961 3.561 4.51v5.264Z" />
    </svg>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 py-16 md:py-20"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Main CTA */}
            <div className="flex flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div>
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-400" />
                  <span className="text-xs font-medium uppercase tracking-widest text-lime-400">
                    Contact / Opportunities
                  </span>
                </div>

                <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Let's build
                  <span className="block text-white/35">
                    something that matters.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/45 sm:text-base">
                  I'm open to full-stack development opportunities,
                  internships, and collaborations where I can contribute to
                  real products and continue growing as an engineer.
                </p>

                <a
                  href="mailto:vishal.goswami.dev@gmail.com"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
                >
                  <Mail size={17} />
                  Get in touch
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/40">
                  Full-Stack Roles
                </span>
                <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/40">
                  Internships
                </span>
                <span className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/40">
                  Product Collaboration
                </span>
              </div>
            </div>

            {/* Right: Contact Directory */}
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30">
                    Direct Channels
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Find me online.
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10">
                  <BriefcaseBusiness size={19} className="text-lime-400" />
                </div>
              </div>

              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-lime-400/30 hover:bg-lime-400/5"
                    >
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition group-hover:border-lime-400/20 group-hover:text-lime-400">
                          {link.label === "GitHub" ? (
                            <GitHubIcon />
                          ) : link.label === "LinkedIn" ? (
                            <LinkedInIcon />
                          ) : (
                            <Icon size={19} />
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs text-white/30">{link.label}</p>
                          <p className="mt-1 truncate text-sm font-medium text-white/75">
                            {link.value}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-400"
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <MapPin size={15} />
                  India · Open to remote
                </div>

                <span className="flex items-center gap-2 text-xs text-lime-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;