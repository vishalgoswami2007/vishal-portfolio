import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-12">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-lime-400" />

              <span className="text-xs font-medium uppercase tracking-widest text-white/50">
                Available for opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-5 text-sm uppercase tracking-widest text-lime-400"
            >
              Full Stack Developer · MERN · AI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Building digital

              <span className="block text-white/35">
                products with
              </span>

              purpose.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/55 md:text-lg"
            >
              I build reliable full-stack applications, thoughtful interfaces,
              and AI-powered experiences focused on solving real problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-medium text-slate-950 transition duration-300 hover:scale-105"
              >
                Explore my work

                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://github.com/vishalgoswami2007"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5"
              >
                <Github size={17} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden justify-end lg:flex"
          >
            <div className="relative flex h-96 w-96 items-center justify-center">

              <div className="absolute h-80 w-80 rounded-full border border-white/10" />

              <div className="absolute h-60 w-60 rounded-full border border-lime-400/25" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-80 w-80"
              >
                <div className="absolute left-1/2 top-0 h-3 w-3 rounded-full bg-lime-400 shadow-lg" />
              </motion.div>

              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-6xl font-semibold tracking-tight">
                  VG
                </span>
              </div>

              <div className="absolute bottom-3 left-0 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 backdrop-blur">
                <p className="text-xs text-white/40">
                  CURRENT FOCUS
                </p>

                <p className="mt-1 text-sm">
                  Building production systems
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-8 left-10 right-10 hidden items-end justify-between md:flex lg:left-12 lg:right-12">
          <a
            href="#work"
            className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/40"
          >
            <ArrowDown size={15} />
            Scroll to explore
          </a>

          <p className="text-xs text-white/30">
            PORTFOLIO / 2026
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;