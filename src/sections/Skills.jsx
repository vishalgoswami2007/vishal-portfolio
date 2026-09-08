import { motion } from "framer-motion";
import {
  ServerCog,
  ShieldCheck,
  Database,
  Workflow,
  BrainCircuit,
  Boxes,
} from "lucide-react";

const engineering = [
  {
    icon: Workflow,
    title: "Real-Time Logic",
    description:
      "Designing booking and state flows where multiple users can interact without breaking consistency.",
    tags: ["Race Conditions", "Socket.io", "Concurrency"],
  },
  {
    icon: ShieldCheck,
    title: "Authentication",
    description:
      "Building secure user flows with protected routes, token verification, password hashing, and verification layers.",
    tags: ["JWT", "bcrypt", "OTP", "OAuth"],
  },
  {
    icon: ServerCog,
    title: "API Architecture",
    description:
      "Structuring backend services with clean controllers, middleware, validation, and reusable route patterns.",
    tags: ["Node.js", "Express", "REST API"],
  },
  {
    icon: Database,
    title: "Data Modeling",
    description:
      "Designing MongoDB schemas and relationships around real product requirements and backend workflows.",
    tags: ["MongoDB", "Mongoose", "Schema Design"],
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Connecting AI APIs into practical product experiences instead of adding AI only as a visual feature.",
    tags: ["OpenAI", "Gemini", "Context"],
  },
  {
    icon: Boxes,
    title: "Product Engineering",
    description:
      "Combining frontend UX, backend logic, deployment, debugging, and iteration into complete applications.",
    tags: ["React", "Tailwind", "Vercel", "Render"],
  },
];

const stack = [
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST APIs",
  "JWT",
  "Socket.io",
  "Git",
  "GitHub",
  "Postman",
  "Cloudinary",
  "Razorpay",
  "Redis",
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/10 bg-slate-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-lime-400">
              Engineering
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              More than a
              <span className="block text-white/35">technology checklist.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/45">
            I focus on understanding how complete systems work — from
            interfaces and APIs to data, authentication, and production
            behavior.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {engineering.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-500 hover:-translate-y-1 hover:border-lime-400/30"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-400/5 blur-3xl transition group-hover:bg-lime-400/10" />

                <div className="relative">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950">
                    <Icon
                      size={21}
                      className="text-lime-400"
                    />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-lime-400">
                Toolkit
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Technologies I work with.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                Tools change over time. The important part is understanding
                when and why to use them.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3">
                {stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2.5 text-sm text-white/60 transition hover:border-lime-400/30 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;