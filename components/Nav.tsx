"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home",     path: "/" },
  { name: "Resume",   path: "/resume" },
  { name: "Projects", path: "/work" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {links.map((link) => {
        const isActive = link.path === pathname;
        return (
          <Link
            key={link.path}
            href={link.path}
            className={[
              "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
              isActive
                ? "text-white"
                : "text-white/50 hover:text-white/90",
            ].join(" ")}
          >
            {/* Sliding pill indicator — shared layoutId animates between links */}
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/[0.09]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {/* Accent dot on active link */}
            {isActive && (
              <motion.span
                layoutId="nav-dot"
                className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
