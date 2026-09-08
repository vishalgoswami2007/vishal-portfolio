import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Code2,
  Sparkles,
} from "lucide-react";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-lime-400">
            Experience & Background
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Learning by building.
            <span className="block text-white/35">
              Growing through real work.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Experience card */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-500 hover:border-lime-400/30 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-400/5 blur-3xl" />

            <div className="relative">
              <div className="mb-10 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10">
                  <BriefcaseBusiness
                    size={22}
                    className="text-lime-400"
                  />
                </div>

                <span className="flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1.5 text-xs text-lime-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  Present
                </span>
              </div>

              <p className="mb-3 text-xs uppercase tracking-widest text-white/35">
                Current Experience
              </p>

              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Growth & Software
                <span className="block">Engineer Intern</span>
              </h3>

              <p className="mt-4 text-lg text-lime-400">
                ReferralWorld Careers
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/40">
                <span>Sep 2026 — Present</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  Remote
                </span>
              </div>

              <div className="my-8 h-px bg-white/10" />

              <p className="leading-7 text-white/55">
                Contributing to an early-stage startup through growth
                initiatives, product research, and software development
                responsibilities, while gaining practical experience in
                collaborative product execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Startup Growth",
                  "Product Research",
                  "Software Engineering",
                  "Collaboration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="https://referralworldcareers.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-lime-400"
              >
                Visit company
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>

          {/* About card */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10"
          >
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Code2 size={22} className="text-white/70" />
            </div>

            <p className="mb-3 text-xs uppercase tracking-widest text-white/35">
              A little about me
            </p>

            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Curious by nature.
              <span className="block text-white/40">
                Engineer by practice.
              </span>
            </h3>

            <p className="mt-7 leading-7 text-white/55">
              I'm Vishal, a full-stack developer focused on building
              practical web applications with the MERN stack. I enjoy
              connecting thoughtful frontend experiences with reliable
              backend systems and exploring how AI can improve developer
              workflows.
            </p>

            <p className="mt-5 leading-7 text-white/55">
              My approach is to understand the problem, build a working
              solution, and improve it through testing, debugging, and
              continuous learning. I'm especially interested in real-time
              systems, authentication, API design, and product engineering.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <Code2 size={20} className="mb-4 text-lime-400" />
                <p className="font-medium">Full-stack thinking</p>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Connecting frontend, backend, and data into complete
                  experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <Sparkles size={20} className="mb-4 text-lime-400" />
                <p className="font-medium">Always exploring</p>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Learning through complex features, experiments, and
                  real product challenges.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Experience;