import { NotebookPen } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 border-t border-line bg-white/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeading
          eyebrow="04 · Case Studies"
          title="Product case studies"
          lede="Written teardowns of real products — how I'd frame the problem, size the opportunity, and shape the roadmap."
        />
        <Reveal>
          <div className="border border-dashed border-gold-500/40 rounded-lg bg-paper px-8 py-14 text-center max-w-xl mx-auto">
            <NotebookPen aria-hidden="true" size={28} className="mx-auto text-gold-500" />
            <p className="mt-5 font-display text-xl font-semibold text-navy-950">
              First case studies land end of July 2026
            </p>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              I'm writing them now. Check back soon — or reach out and I'll send a
              draft when it's ready.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
