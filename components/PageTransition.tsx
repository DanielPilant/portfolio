"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Wraps every page in a consistent fade + slide-up entrance.
// key={pathname} forces a remount on route change, re-triggering the animation.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
