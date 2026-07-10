import { motion, useReducedMotion } from 'framer-motion'
import { FileDown, ArrowDown } from 'lucide-react'
import { site } from '../../data/site.js'
import profile from '../../assets/profile.webp'

const fadeUp = (reduce, delay) => ({
  initial: reduce ? false : { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] },
})

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
        <div>
          <motion.p {...fadeUp(reduce, 0)} className="eyebrow mb-5">
            AI Product Manager · Mumbai, India
          </motion.p>
          <motion.h1
            {...fadeUp(reduce, 0.08)}
            className="font-display text-4xl sm:text-6xl font-semibold text-navy-950 tracking-tight leading-[1.05]"
          >
            I ship AI products,<br />
            from <em className="text-gold-600 not-italic font-display font-semibold italic">pipeline</em> to{' '}
            <em className="text-gold-600 not-italic font-display font-semibold italic">P&amp;L</em>.
          </motion.h1>
          <motion.p
            {...fadeUp(reduce, 0.16)}
            className="mt-6 text-base text-ink-soft max-w-xl"
          >
            GenAI &amp; Computer Vision
            <span aria-hidden="true" className="mx-2 text-gold-500">·</span>
            Agentic AI
            <span aria-hidden="true" className="mx-2 text-gold-500">·</span>
            AI Product Builder
            <span aria-hidden="true" className="mx-2 text-gold-500">·</span>
            MBA, IIM Udaipur
          </motion.p>
          <motion.div
            {...fadeUp(reduce, 0.24)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 bg-navy-950 text-paper px-5 py-2.5 rounded-md font-medium text-sm hover:bg-navy-800 transition-colors"
            >
              View projects
              <ArrowDown size={15} />
            </a>
            <a
              href="/#experience"
              className="inline-flex items-center gap-2 border border-navy-950/25 text-navy-950 px-5 py-2.5 rounded-md font-medium text-sm hover:border-gold-500 hover:text-gold-600 transition-colors"
            >
              My experience
            </a>
            <a
              href={site.resumePath}
              download="Shivargha_Bandopadhyay_Resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-950 link-underline pb-0.5"
            >
              <FileDown size={15} className="text-gold-600" />
              Download résumé
            </a>
          </motion.div>
        </div>

        {/* Portrait with orbital accent */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-56 sm:w-72"
        >
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="var(--color-gold-500)"
              strokeWidth="0.6"
              strokeDasharray="12 7"
              opacity="0.7"
            />
            <circle cx="50" cy="3" r="1.8" fill="var(--color-gold-500)" />
            <circle cx="90" cy="76" r="1.4" fill="var(--color-navy-800)" />
            <circle cx="8" cy="70" r="1.4" fill="var(--color-navy-800)" />
          </svg>
          <img
            src={profile}
            alt={`Portrait of ${site.name}`}
            width="720"
            height="720"
            className="relative rounded-full w-full shadow-[0_18px_40px_-12px_rgba(10,25,48,0.35)]"
          />
          <p className="mt-6 text-center font-display text-xl font-semibold text-navy-950">
            {site.name}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
