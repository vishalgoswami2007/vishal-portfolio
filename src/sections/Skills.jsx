import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  BrainCircuit,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const modules = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "React · UI Architecture",
    icon: Code2,
    description:
      "Building responsive interfaces with reusable components, clean state handling, routing, and product-focused UI structure.",
    concepts: [
      "Reusable Components",
      "State Management",
      "Responsive UI",
      "React Router",
    ],
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Node · Express · APIs",
    icon: Server,
    description:
      "Designing REST APIs, structuring controllers, handling middleware, validating requests, and connecting application logic to databases.",
    concepts: [
      "REST APIs",
      "Controllers",
      "Middleware",
      "Error Handling",
    ],
    stack: ["Node.js", "Express.js", "Postman"],
  },
  {
    id: "data",
    title: "Data & Logic",
    subtitle: "MongoDB · Concurrency",
    icon: Database,
    description:
      "Working with application data, database models, booking logic, validation, and race-condition-aware workflows.",
    concepts: [
      "MongoDB Models",
      "Mongoose",
      "Validation",
      "Concurrency Logic",
    ],
    stack: ["MongoDB", "Mongoose", "Redis"],
  },
  {
    id: "auth",
    title: "Authentication",
    subtitle: "JWT · Access Control",
    icon: ShieldCheck,
    description:
      "Building secure authentication flows using tokens, protected routes, middleware, user sessions, and role-aware access logic.",
    concepts: [
      "JWT",
      "Protected Routes",
      "Auth Middleware",
      "Access Control",
    ],
    stack: ["JWT", "Node.js", "Express.js"],
  },
  {
    id: "ai",
    title: "AI Integration",
    subtitle: "Context · AI APIs",
    icon: BrainCircuit,
    description:
      "Integrating AI into developer and product workflows using structured context instead of treating AI as a generic chat layer.",
    concepts: [
      "AI APIs",
      "Prompt Context",
      "Developer Workflows",
      "Structured Inputs",
    ],
    stack: ["Gemini", "OpenAI", "React.js"],
  },
  {
    id: "delivery",
    title: "Product Delivery",
    subtitle: "Git · Deployment · Testing",
    icon: Workflow,
    description:
      "Taking products from local development to deployed applications while managing version control, testing, debugging, and integrations.",
    concepts: [
      "Git Workflow",
      "Deployment",
      "Debugging",
      "API Testing",
    ],
    stack: ["Git", "GitHub", "Vercel", "Render"],
  },
];

function Skills() {
  const [activeId, setActiveId] = useState("backend");

  const activeModule = modules.find((module) => module.id === activeId);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 py-16 md:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-lime-400/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-lime-400">
              Engineering
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              The systems behind
              <span className="block text-white/35">
                the products.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            Explore the areas I work across while building full-stack products,
            APIs, real-time workflows, and AI-powered experiences.
          </p>
        </div>

        {/* Main Control Room */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          {/* Top Bar */}
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-30" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
              </span>

              <span className="text-xs uppercase tracking-widest text-white/45">
                Engineering System Online
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/30">
              <span>06 Modules</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Full Stack</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-5">
            {/* Left Module Selector */}
            <div className="border-b border-white/10 lg:col-span-2 lg:border-b-0 lg:border-r">
              <div className="p-4 sm:p-5">
                <p className="px-3 pb-4 text-xs uppercase tracking-widest text-white/25">
                  Capability Modules
                </p>

                <div className="space-y-2">
                  {modules.map((module, index) => {
                    const Icon = module.icon;
                    const isActive = activeId === module.id;

                    return (
                      <button
                        key={module.id}
                        onClick={() => setActiveId(module.id)}
                        onMouseEnter={() => setActiveId(module.id)}
                        className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                          isActive
                            ? "border-lime-400/25 bg-lime-400/10"
                            : "border-transparent hover:border-white/10 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                              isActive
                                ? "border-lime-400/25 bg-lime-400/10 text-lime-400"
                                : "border-white/10 bg-white/5 text-white/40 group-hover:text-white/70"
                            }`}
                          >
                            <Icon size={18} />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-white/20">
                                0{index + 1}
                              </span>

                              <p
                                className={`text-sm font-medium transition ${
                                  isActive
                                    ? "text-white"
                                    : "text-white/65 group-hover:text-white"
                                }`}
                              >
                                {module.title}
                              </p>
                            </div>

                            <p className="mt-1 text-xs text-white/30">
                              {module.subtitle}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={15}
                          className={`transition ${
                            isActive
                              ? "translate-x-0 text-lime-400 opacity-100"
                              : "-translate-x-1 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Detail Panel */}
            <div className="relative  min-h-96 lg:col-span-3">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                  `,
                  backgroundSize: "36px 36px",
                }}
              />

              <div className="pointer-events-none absolute right-10 top-10 h-52 w-52 rounded-full bg-lime-400/5 blur-3xl" />

              <div className="relative h-full p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModule.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                    className="flex h-full flex-col"
                  >
                    {/* Module Header */}
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-lime-400">
                          Selected Module
                        </p>

                        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                          {activeModule.title}
                        </h3>

                        <p className="mt-2 text-sm text-white/30">
                          {activeModule.subtitle}
                        </p>
                      </div>

                      <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-400 sm:flex">
                        {(() => {
                          const Icon = activeModule.icon;
                          return <Icon size={24} />;
                        })()}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-8 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                      {activeModule.description}
                    </p>

                    {/* Concepts */}
                    <div className="mt-10">
                      <p className="text-xs uppercase tracking-widest text-white/25">
                        Engineering Concepts
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {activeModule.concepts.map((concept, index) => (
                          <motion.div
                            key={concept}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.04 }}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />

                            <span className="text-sm text-white/65">
                              {concept}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Stack */}
                    <div className="mt-auto pt-10">
                      <div className="border-t border-white/10 pt-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-widest text-white/25">
                              Tools & Stack
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {activeModule.stack.map((tool) => (
                                <span
                                  key={tool}
                                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/50"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-white/25">
                            <span className="h-2 w-2 rounded-full bg-lime-400" />
                            Active Capability
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;