import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "minequeue",
    number: "01",
    name: "MineQueue",
    type: "REAL-TIME SYSTEM",
    status: "Live",
    description:
      "A real-time doctor appointment booking platform built around reliable slot scheduling, authentication, doctor availability, and concurrency-safe booking.",
    highlight:
      "Designed to prevent double-booking when multiple users try to reserve the same slot.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
    live: "#",
    github: "#",
  },
  {
    id: "triage",
    number: "02",
    name: "Triage",
    type: "AI DEVELOPER TOOL",
    status: "Currently Building",
    description:
      "An AI-powered developer debugging workspace designed to understand errors using repository context, code, screenshots, and developer-provided information.",
    highlight:
      "Built around structured developer context instead of a generic AI chat experience.",
    stack: ["React", "Node.js", "MongoDB", "AI APIs", "GitHub"],
    live: null,
    github: "#",
  },
];

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.12c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.77 1.03.77 2.08v3.08c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function SelectedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 py-16 md:py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-lime-400">
              Selected Work
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Two products.
              <span className="block text-white/35">
                Different engineering problems.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            Hover over each project to explore the engineering idea, stack,
            and current project status.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="flip-card group h-96"
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front overflow-hidden rounded-3xl border border-lime-400/20 bg-lime-400 p-7 text-slate-950 sm:p-8">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(15,23,42,0.16) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(15,23,42,0.16) 1px, transparent 1px)
                      `,
                      backgroundSize: "38px 38px",
                    }}
                  />

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-semibold opacity-60">
                        {project.number}
                      </span>

                      <span className="rounded-full border border-slate-950/20 px-3 py-1.5 text-xs font-medium uppercase tracking-wider">
                        {project.type}
                      </span>
                    </div>

                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-widest opacity-50">
                            Project
                          </p>

                          <h3 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                            {project.name}
                          </h3>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-950/20">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-950/20 pt-5">
                        <span className="text-sm font-medium">
                          Hover to explore
                        </span>

                        <span className="flex items-center gap-2 text-sm font-medium">
                          <span className="h-2 w-2 rounded-full bg-slate-950" />
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back overflow-hidden rounded-3xl border border-lime-400/25 bg-slate-900 p-7 sm:p-8">
                  <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-lime-400/10 blur-3xl" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-lime-400">
                            {project.type}
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold">
                            {project.name}
                          </h3>
                        </div>

                        <span
                          className={`rounded-full border px-3 py-1.5 text-xs ${
                            project.status === "Live"
                              ? "border-lime-400/30 bg-lime-400/10 text-lime-400"
                              : "border-white/10 bg-white/5 text-white/50"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-6 text-sm leading-6 text-white/55">
                        {project.description}
                      </p>

                      <div className="mt-5 border-l-2 border-lime-400 pl-4">
                        <p className="text-sm leading-6 text-white/75">
                          {project.highlight}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:scale-105"
                        >
                          Live Project
                          <ArrowUpRight
                            size={15}
                            className="transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/70 transition hover:border-lime-400/30 hover:text-white"
                      >
                        <GitHubIcon />
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;