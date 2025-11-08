"use client"

// Animated matrix background component wrapping the CSS pattern.
// Fills the full viewport width by rendering as many 25px columns as needed.
// Positioned fixed and non-interactive.

import { useEffect, useMemo, useState } from 'react'

export default function BackgroundMatrix() {
  const [count, setCount] = useState(40)

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth || 1024
      // Original pattern spaces columns every 25px (20px column + ~5px gap)
      const needed = Math.ceil(w / 25) + 2
      setCount(needed)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  // Precompute random durations/delays to mimic the nth-child variety
  const columns = useMemo(() => {
    // Slow: durations between 10s and 20s, negative delays up to -10s so some columns are mid-fall
    return Array.from({ length: count }, () => ({
      duration: (Math.random() * (20 - 10) + 10).toFixed(2) + 's',
      delay: (-1 * (Math.random() * (10 - 2) + 2)).toFixed(2) + 's',
    }))
  }, [count])

  const patternWidth = count * 25 // px

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="matrix-container w-full h-full">
        <div className="matrix-pattern h-full" style={{ width: patternWidth }}>
          {columns.map((cfg, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{ left: i * 25, animationDuration: cfg.duration, animationDelay: cfg.delay }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
