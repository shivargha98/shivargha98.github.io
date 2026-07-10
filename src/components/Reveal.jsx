import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered fade/slide-up. Respects prefers-reduced-motion.
export default function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  )
}
