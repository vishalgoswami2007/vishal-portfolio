import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function SelectedWork() {
  return (
    <section
      id="work"
      className="relative border-t border-white/10 bg-slate-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-lime-400">
              Selected Work
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Products built around
              <span className="block text-white/35">
                real engineering problems.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/45">
            A selection of projects where product thinking, frontend design,
            backend architecture, and practical engineering come together.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:border-lime-400/30"
            >
              <div className="grid min-h-96 lg:grid-cols-2">
                {/* Project Content */}
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                  <div>
                    <div className="mb-12 flex items-center justify-between">
                      <span className="text-sm text-white/30">
                        {project.number}
                      </span>

                      <span className="text-xs uppercase tracking-widest text-lime-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-lg text-white/45">
                      {project.subtitle}
                    </p>

                    <p className="mt-8 max-w-xl leading-7 text-white/55">
                      {project.description}
                    </p>

                    <div className="mt-8 border-l-2 border-lime-400 pl-5">
                      <p className="text-sm leading-6 text-white/70">
                        {project.highlight}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <div className="mb-7 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-lime-400"
                      >
                        View Project

                        <ArrowUpRight
                          size={16}
                          className="transition group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                        />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.12c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.77 1.03.77 2.08v3.08c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                        </svg>

                        Source
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="relative min-h-80 overflow-hidden border-t border-white/10 bg-slate-900 lg:min-h-full lg:border-l lg:border-t-0">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

                  <div className="absolute left-6 right-6 top-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl sm:left-10 sm:right-10">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>

                    <div className="p-5 sm:p-7">
                      <p className="text-xs uppercase tracking-widest text-white/30">
                        PROJECT / {project.number}
                      </p>

                      <p className="mt-4 text-2xl font-semibold">
                        {project.title}
                      </p>

                      <div className="mt-8 space-y-3">
                        <div className="h-3 w-4/5 rounded-full bg-white/10" />
                        <div className="h-3 w-3/5 rounded-full bg-white/10" />
                        <div className="h-3 w-2/5 rounded-full bg-lime-400/50" />
                      </div>

                      <div className="mt-10 grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
                        <div className="h-20 rounded-xl border border-white/10 bg-white/5" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 right-6 text-6xl font-semibold text-white/5 sm:text-8xl">
                    {project.number}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;