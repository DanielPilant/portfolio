"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all duration-300",
        "backdrop-blur-md",
        scrolled
          ? "bg-background/80 border-b border-white/[0.06] shadow-[0_1px_24px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto flex items-center justify-between h-16 xl:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl xl:text-2xl font-bold tracking-tight text-white hover:text-accent transition-colors duration-300"
        >
          Daniel<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-1">
          <Nav />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
