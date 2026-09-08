import { ArrowUp } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-slate-950">
              V
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Vishal Goswami
              </p>

              <p className="text-xs text-white/35">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Middle */}
          <p className="text-sm text-white/30">
            Built with React, Tailwind & a lot of debugging.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-white/45 transition hover:text-lime-400"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition group-hover:border-lime-400/30 group-hover:bg-lime-400/10">
              <ArrowUp size={15} />
            </span>
          </button>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Vishal Goswami. All rights reserved.
          </p>

          <p>
            Designed & built from scratch.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;