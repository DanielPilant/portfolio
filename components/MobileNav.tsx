"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home",     path: "/" },
  { name: "Resume",   path: "/resume" },
  { name: "Projects", path: "/work" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Hamburger trigger */}
      <SheetTrigger className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/[0.06] transition-colors duration-200">
        <CiMenuFries className="text-[22px] text-accent" />
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent
        side="right"
        className="flex flex-col w-72 bg-card border-l border-white/[0.06] p-0 gap-0"
      >
        {/* Visually hidden title satisfies Radix Dialog accessibility requirement */}
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>

        {/* Logo */}
        <div className="flex items-center px-7 h-16 border-b border-white/[0.06] shrink-0">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xl font-bold tracking-tight text-white hover:text-accent transition-colors duration-200"
          >
            Daniel<span className="text-accent">.</span>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-6 gap-1">
          {links.map((link) => {
            const isActive = link.path === pathname;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={[
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-accent bg-accent/[0.08] border border-accent/[0.15]"
                    : "text-white/50 hover:text-white hover:bg-white/[0.05]",
                ].join(" ")}
              >
                {/* Active dot */}
                <span
                  className={[
                    "w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-200",
                    isActive ? "bg-accent" : "bg-white/20",
                  ].join(" ")}
                />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto px-7 py-6 border-t border-white/[0.06]">
          <p className="text-white/25 text-xs tracking-wide">
            Daniel Pilant &mdash; Portfolio
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
