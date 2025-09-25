import React from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-300/60 bg-white/70 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70"
      aria-pressed={dark}
      title="Toggle dark mode"
    >
      <span className="inline-block h-4 w-4 rounded-full bg-yellow-400 dark:hidden" />
      <span className="hidden h-4 w-4 rounded-full bg-slate-200 dark:inline-block" />
      <span>{dark ? 'Dark' : 'Light'}</span>
    </button>
  )
}
