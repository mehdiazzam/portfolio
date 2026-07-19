import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type LoadingScreenProps = {
  onComplete: () => void;
  name: string;
  role: string;
};

export function LoadingScreen({ onComplete, name, role }: LoadingScreenProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const displayName = name.trim() || "Mehdi Azzam";

  useEffect(() => {
    const duration = prefersReducedMotion ? 200 : 900;
    const timer = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timer);
  }, [onComplete, prefersReducedMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-canvas"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px 400px at 30% 40%, hsl(var(--color-accent) / 0.14), transparent 60%), radial-gradient(500px 350px at 70% 60%, hsl(var(--color-accent-2) / 0.12), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-sm border border-accent/40 bg-accent/10 font-display text-2xl font-semibold tracking-tight text-accent"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          aria-hidden
        >
          MA
        </motion.div>
        <div className="text-center">
          <p className="eyebrow">Mehdi Azzam</p>
          <p className="mt-2 text-lg text-ink">{displayName}</p>
          <p className="text-xs text-ink-muted">{role}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-ink-muted">Loading</p>
        </div>
        <motion.div
          className="h-1 w-40 overflow-hidden rounded-sm bg-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full w-full bg-accent"
            initial={{ x: "-100%" }}
            animate={{ x: prefersReducedMotion ? "0%" : "100%" }}
            transition={
              prefersReducedMotion
                ? { duration: 0.2 }
                : { duration: 0.9, ease: "easeInOut" }
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
