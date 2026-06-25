import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  target?: string
  rel?: string
  download?: boolean | string
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  target,
  rel,
  download,
}: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.6 })

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    x.set(offsetX * 0.18)
    y.set(offsetY * 0.18)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = href ? motion.a : motion.button

  return (
    <MotionTag
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      download={download}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
