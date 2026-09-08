import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10 md:p-14"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-lime-400">
                Let's Connect
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Have an idea?
                <span className="block text-white/35">
                  Let's build something useful.
                </span>
              </h2>

              <p className="mt-7 max-w-xl leading-7 text-white/50">
                I'm open to internships, full-stack opportunities,
                collaborations, and interesting product ideas where I can
                contribute, learn, and build meaningful software.
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href="mailto:your-email@example.com"
                className="group inline-flex items-center gap-3 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:scale-105"
              >
                <Mail size={17} />
                Send me an email

                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/35 lg:justify-end">
                <MapPin size={15} />
                India · Open to remote opportunities
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;