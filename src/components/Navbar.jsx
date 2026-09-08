import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Work", "Experience", "Skills", "Contact"];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 lg:px-12">

        <a
          href="#home"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 font-bold text-slate-950">
            V
          </div>

          <span className="hidden sm:block">
            Vishal Goswami
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/60 transition duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-lime-400/60 hover:bg-lime-400 hover:text-slate-950 md:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-7 md:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg text-white/70 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;