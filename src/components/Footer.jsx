import { ArrowUpRight } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 font-bold text-slate-950">
              V
            </div>

            <div>
              <p className="text-sm font-medium">Vishal Goswami</p>
              <p className="text-xs text-white/30">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/40">
            <a
              href="https://github.com/vishalgoswami2007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a
              href="#home"
              className="transition hover:text-white"
            >
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Vishal Goswami. All rights reserved.</p>
          <p>Designed & built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;