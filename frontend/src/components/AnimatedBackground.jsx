import React from 'react'

export default function AnimatedBackground({ children, variant = 'auth' }) {
  // Variant can be 'auth' (gentle) or 'home' (more lively)
  const isAuth = variant === 'auth'
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient backdrop */}
      <div
  className={`absolute inset-0 -z-20 
              bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 
              dark:from-indigo-900 dark:via-sky-900 dark:to-emerald-900
              bg-[length:200%_200%] animate-gradient-x`}
></div> 

      {/* Floating/Bubbling circles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Gentle set for auth */}
        <div className={`absolute -left-16 top-20 h-40 w-40 bubble ${isAuth ? 'bg-indigo-300/40 dark:bg-indigo-400/20' : 'bg-indigo-300/60 dark:bg-indigo-400/30'} animate-float`} />
        <div className={`absolute right-10 top-32 h-24 w-24 bubble ${isAuth ? 'bg-cyan-300/40 dark:bg-cyan-400/20' : 'bg-cyan-300/60 dark:bg-cyan-400/30'} animate-bubble`} />
        <div className={`absolute left-1/3 bottom-20 h-28 w-28 bubble ${isAuth ? 'bg-emerald-300/40 dark:bg-emerald-400/20' : 'bg-emerald-300/60 dark:bg-emerald-400/30'} animate-float`} />
        {/* Extra bubbles for home variant */}
        {!isAuth && (
          <>
            <div className="absolute left-10 bottom-24 h-20 w-20 bubble bg-rose-300/60 dark:bg-rose-400/30 animate-bubble" />
            <div className="absolute right-24 bottom-12 h-32 w-32 bubble bg-blue-300/60 dark:bg-blue-400/30 animate-float" />
            <div className="absolute right-1/3 top-10 h-16 w-16 bubble bg-fuchsia-300/60 dark:bg-fuchsia-400/30 animate-bubble" />
          </>
        )}
      </div>

      {/* Content layer */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  )
}

