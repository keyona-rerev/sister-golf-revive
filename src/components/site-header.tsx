import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/workshops", label: "Workshops" },
  { to: "/founder", label: "Founder" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl leading-none tracking-tight text-fairway">
            Sister
          </span>
          <span className="font-display text-2xl leading-none tracking-tight text-accent">
            Golf
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-fairway" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-fairway"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-sm bg-fairway px-5 py-2.5 text-sm font-semibold text-fairway-foreground transition-colors hover:bg-fairway-deep"
          >
            Book a Workshop
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-sm bg-fairway px-5 py-2.5 text-center text-sm font-semibold text-fairway-foreground"
            >
              Book a Workshop
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
