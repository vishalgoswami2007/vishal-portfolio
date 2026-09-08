import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";

const modules = [
  {
    icon: Code2,
    title: "Frontend",
    value: "React",
  },
  {
    icon: Server,
    title: "Backend",
    value: "Node.js",
  },
  {
    icon: Database,
    title: "Database",
    value: "MongoDB",
  },
  {
    icon: Sparkles,
    title: "Intelligence",
    value: "AI",
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24"
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 md:px-10 lg:px-12">
        <div className="w-full">

          {/* Small identity */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-lime-400" />

              <span className="text-xs uppercase tracking-widest text-white/40">
                Vishal Goswami / Developer System
              </span>
            </div>

            <span className="hidden text-xs uppercase tracking-widest text-white/25 sm:block">
              Portfolio / 2026
            </span>
          </motion.div>

          {/* Main Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
              </div>

              <div className="flex items-center gap-2 text-xs text-white/35">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                SYSTEM ONLINE
              </div>
            </div>

            <div className="grid lg:grid-cols-3">

              {/* Left */}
              <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Identity
                </p>

                <div className="mt-8 flex items-center gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-3xl font-semibold text-lime-400">
                    VG
                  </div>

                  <div>
                    <p className="text-xl font-semibold">
                      Vishal Goswami
                    </p>

                    <p className="mt-1 text-sm text-white/40">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 text-sm">
                    <span className="text-white/35">Stack</span>
                    <span className="text-white/70">MERN</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-4 text-sm">
                    <span className="text-white/35">Focus</span>
                    <span className="text-white/70">
                      Product Engineering
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/35">Status</span>

                    <span className="flex items-center gap-2 text-lime-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Center */}
              <div className="relative flex min-h-96 items-center justify-center overflow-hidden border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                <div className="absolute h-72 w-72 rounded-full border border-white/10" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-60 w-60 rounded-full border border-lime-400/20"
                >
                  <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-lime-400 shadow-lg" />
                </motion.div>

                <div className="absolute h-44 w-44 rounded-full border border-white/10" />

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-slate-900 shadow-2xl"
                >
                  <span className="text-4xl font-semibold">
                    VG
                  </span>
                </motion.div>

                <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur">
                  <p className="text-xs text-white/30">
                    CURRENT BUILD
                  </p>

                  <p className="mt-1 text-sm">
                    Triage
                  </p>
                </div>

                <div className="absolute right-6 top-6 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur">
                  <p className="text-xs text-white/30">
                    SYSTEM
                  </p>

                  <p className="mt-1 text-sm text-lime-400">
                    Running
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="p-6 lg:p-8">
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Engineering Modules
                </p>

                <div className="mt-7 space-y-3">
                  {modules.map((module, index) => {
                    const Icon = module.icon;

                    return (
                      <motion.div
                        key={module.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                        }}
                        whileHover={{ x: 4 }}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-lime-400/30"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950">
                            <Icon
                              size={17}
                              className="text-lime-400"
                            />
                          </div>

                          <div>
                            <p className="text-xs text-white/30">
                              {module.title}
                            </p>

                            <p className="mt-1 text-sm">
                              {module.value}
                            </p>
                          </div>
                        </div>

                        <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Projects */}
            <div className="grid border-t border-white/10 sm:grid-cols-2">
              <a
                href="#work"
                className="group flex items-center justify-between border-b border-white/10 p-5 transition hover:bg-white/5 sm:border-b-0 sm:border-r"
              >
                <div>
                  <p className="text-xs text-white/30">
                    01 / SYSTEM
                  </p>

                  <p className="mt-1 font-medium">
                    MineQueue
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-400"
                />
              </a>

              <a
                href="#work"
                className="group flex items-center justify-between p-5 transition hover:bg-white/5"
              >
                <div>
                  <p className="text-xs text-white/30">
                    02 / AI PRODUCT
                  </p>

                  <p className="mt-1 font-medium">
                    Triage
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-400"
                />
              </a>
            </div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-7 flex justify-center"
          >
            <a
              href="#work"
              className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/35 transition hover:text-lime-400"
            >
              <ArrowDown size={15} />
              Explore Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;