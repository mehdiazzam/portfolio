import { useTheme } from '../lib/theme'

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
    >
      <span className="text-xs uppercase tracking-[0.22em]">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}
