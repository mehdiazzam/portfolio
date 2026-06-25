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
  const displayName = name.trim() || "Porfolio";

  useEffect(() => {
    const duration = prefersReducedMotion ? 350 : 1150;
    const timer = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timer);
  }, [onComplete, prefersReducedMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-canvas"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px 400px at 30% 40%, hsl(var(--color-accent) / 0.12), transparent 60%), radial-gradient(500px 350px at 70% 60%, hsl(var(--color-accent-2) / 0.1), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-sm text-center">
            <img
              src={`${import.meta.env.BASE_URL}mehdi.jpg`}
              className="h-10 w-10 animate-float rounded-sm border border-accent/30 object-cover ring-1 ring-accent/20"
            />
          </div>
          <div className="text-left">
            <p className="eyebrow">Portfolio</p>
            <p className="text-lg text-ink">{displayName}</p>
            <p className="text-xs text-ink-muted">{role}</p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl text-ink">Loading the experience</h1>
          <p className="mt-2 text-sm text-ink-muted">
            Crafting a premium atmosphere
          </p>
        </div>
        <motion.div
          className="h-1 w-40 overflow-hidden rounded-sm bg-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full w-full bg-accent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
