import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  MapPin,
  Sparkles,
  Code2,
  ChevronDown,
} from "lucide-react";

function Experience() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 py-16 md:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-lime-400">
              Experience & Background
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Real work.
              <span className="block text-white/35">
                Real startup exposure.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            Currently contributing inside an early-stage environment where
            product thinking, growth, and execution come together.
          </p>
        </div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          <div className="grid lg:grid-cols-3">
            {/* Company Identity */}
            <div className="relative border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-lime-400/5 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10">
                    <Building2 size={22} className="text-lime-400" />
                  </div>

                  <span className="flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1.5 text-xs text-lime-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                    Present
                  </span>
                </div>

                <p className="text-xs uppercase tracking-widest text-white/30">
                  Current Company
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  ReferralWorld
                  <span className="block text-white/35">Careers</span>
                </h3>

                <div className="mt-6">
                  <p className="text-sm text-white/35">Role</p>

                  <p className="mt-1 font-medium text-white/80">
                    Growth & Software Engineer Intern
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/40">
                  <span>Sep 2026 — Present</span>

                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    Remote
                  </span>
                </div>

                <a
                  href="https://referralworldcareers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-lime-400"
                >
                  Visit company
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* Current Contribution */}
            <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-8">
              <p className="text-xs uppercase tracking-widest text-white/30">
                What I'm exposed to
              </p>

              <div className="mt-7 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center gap-3">
                    <Sparkles size={18} className="text-lime-400" />

                    <div>
                      <p className="text-sm font-medium">Startup Growth</p>
                      <p className="mt-1 text-xs leading-5 text-white/40">
                        Exploring practical ways to improve reach, positioning,
                        and early-stage growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center gap-3">
                    <Code2 size={18} className="text-lime-400" />

                    <div>
                      <p className="text-sm font-medium">Software Thinking</p>
                      <p className="mt-1 text-xs leading-5 text-white/40">
                        Applying development knowledge to understand product
                        workflows and technical execution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness size={18} className="text-lime-400" />

                    <div>
                      <p className="text-sm font-medium">Product Context</p>
                      <p className="mt-1 text-xs leading-5 text-white/40">
                        Learning how product, user needs, execution, and growth
                        connect inside a startup.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signal Panel */}
            <div className="p-7 lg:p-8">
              <p className="text-xs uppercase tracking-widest text-white/30">
                Current signal
              </p>

              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-40" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400" />
                  </span>

                  <p className="text-lg font-medium">
                    Active experience
                  </p>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/45">
                  This role gives me direct exposure to how an early-stage
                  company thinks about users, growth, product direction, and
                  execution.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs text-white/30">Environment</p>
                    <p className="mt-2 text-sm font-medium">
                      Early Stage
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs text-white/30">Work Style</p>
                    <p className="mt-2 text-sm font-medium">
                      Remote
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="mt-8 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/65 transition hover:border-lime-400/25 hover:text-white"
              >
                Explore company context

                <ChevronDown
                  size={16}
                  className={`transition duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Expandable Company Context */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden border-t border-white/10"
              >
                <div className="grid gap-8 p-7 md:grid-cols-2 lg:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-lime-400">
                      Company Context
                    </p>

                    <h4 className="mt-3 text-xl font-semibold">
                      ReferralWorld Careers
                    </h4>

                    <p className="mt-4 text-sm leading-6 text-white/45">
                      An early-stage careers-focused startup environment where
                      growth, product positioning, and execution are closely
                      connected.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30">
                      What this experience is teaching me
                    </p>

                    <div className="mt-4 space-y-3 text-sm text-white/50">
                      <p>• How early-stage teams think about growth.</p>
                      <p>• How product and user needs influence decisions.</p>
                      <p>• How technical thinking supports business execution.</p>
                      <p>• How to communicate and contribute inside a team.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;