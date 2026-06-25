import { motion } from 'framer-motion'

type AnimatedTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const child = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

type AnimatedTextProps = {
  text: string
  className?: string
  as?: AnimatedTag
  delay?: number
}

export function AnimatedText({
  text,
  className,
  as: Tag = 'h1',
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ delay }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={child}
            className="mr-2 inline-flex"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
