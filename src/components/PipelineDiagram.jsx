import { motion, useReducedMotion } from 'framer-motion'

// Signature element: agent pipelines rendered as node graphs.
// Nodes appear in sequence, connected by gold edges.
export default function PipelineDiagram({ stages, note }) {
  const reduce = useReducedMotion()

  return (
    <div>
      <div className="flex flex-wrap items-center gap-y-3">
        {stages.map((stage, i) => (
          <motion.div
            key={stage}
            className="flex items-center"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09, duration: 0.35 }}
          >
            <span className="inline-flex items-center gap-2 border border-navy-800/25 bg-white rounded-md px-3 py-1.5 font-mono text-[11px] sm:text-xs text-navy-950 whitespace-nowrap shadow-[0_1px_2px_rgba(10,25,48,0.06)]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-gold-500"
              />
              {stage}
            </span>
            {i < stages.length - 1 && (
              <span
                aria-hidden="true"
                className="mx-1.5 sm:mx-2 text-gold-500 font-mono text-xs select-none"
              >
                ─▸
              </span>
            )}
          </motion.div>
        ))}
      </div>
      {note && (
        <p className="mt-3 font-mono text-[11px] text-ink-soft">
          <span aria-hidden="true" className="text-gold-600">↺ </span>
          {note}
        </p>
      )}
    </div>
  )
}
