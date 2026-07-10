import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { skillGroups } from '../../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line bg-white/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Skills"
          title="Three layers, one practice"
          lede="Product judgment on top, agentic AI in the middle, ML engineering at the base; each layer informs the others."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="border border-line rounded-lg bg-paper p-6 h-full">
                <h3 className="font-display text-xl font-semibold text-navy-950">
                  {group.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-gold-600">
                  {group.note}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
