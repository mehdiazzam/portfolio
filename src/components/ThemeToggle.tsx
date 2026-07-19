import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/theme";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
    >
      <span className="inline-flex items-center justify-center gap-2">
        {isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
        <span className="text-xs uppercase tracking-[0.22em]">
          {isDark ? "Light" : "Dark"}
        </span>
      </span>
    </button>
  );
}
