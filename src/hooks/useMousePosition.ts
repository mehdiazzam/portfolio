import { useEffect, useState } from 'react'

type MousePosition = {
  x: number
  y: number
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      setPosition({ x: clamp(x, -1, 1), y: clamp(y, -1, 1) })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return position
}
