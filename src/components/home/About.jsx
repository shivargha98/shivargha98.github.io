import { Mail } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { summary, experience, education } from '../../data/experience.js'
import { site } from '../../data/site.js'

function TimelineEntry({ entry, index }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)}>
      <article className="relative pl-8 sm:pl-10 pb-12 last:pb-0">
        {/* Handoff thread: node + connecting line */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-gold-500 bg-paper"
        />
        <span
          aria-hidden="true"
          className="absolute left-[5px] top-6 bottom-0 w-px bg-line group-last:hidden"
        />
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-950">
            {entry.role}
          </h3>
          <span className="text-ink-soft text-sm">
            {entry.company} · {entry.location}
          </span>
          {entry.type === 'internship' && (
            <span className="chip !text-gold-600 !border-gold-500/40">Internship</span>
          )}
        </div>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          {entry.period}
        </p>
        <p className="mt-2 text-sm font-medium text-gold-600">{entry.theme}</p>
        <ul className="mt-3 space-y-2">
          {entry.bullets.map((b) => (
            <li key={b} className="text-sm text-ink-soft leading-relaxed flex gap-2.5">
              <span aria-hidden="true" className="text-gold-500 mt-0.5 shrink-0">
                ›
              </span>
              {b}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}

export default function About() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeading
          eyebrow="01 · Experience"
          title="Engineer's depth, operator's lens"
          lede={summary.intro}
        />

        <div className="grid lg:grid-cols-[1fr_320px] gap-14">
          <div className="group">
            <Reveal>
              <p className="text-ink leading-relaxed max-w-2xl mb-12">
                {summary.positioning}
              </p>
            </Reveal>
            <div>
              {experience.map((entry, i) => (
                <TimelineEntry key={entry.company + entry.period} entry={entry} index={i} />
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <Reveal>
              <div className="border border-line rounded-lg p-6 bg-white/50">
                <p className="eyebrow mb-4">By the numbers</p>
                <dl className="space-y-5">
                  {summary.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="font-display text-3xl font-semibold text-navy-950">
                        {s.value}
                        {s.suffix}
                      </dd>
                      <dd className="text-sm text-ink-soft">{s.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <p className="eyebrow mb-4">Education</p>
                <ul className="space-y-4">
                  {education.map((e) => (
                    <li key={e.degree}>
                      <p className="font-medium text-navy-950 text-sm">{e.degree}</p>
                      <p className="text-sm text-ink-soft">{e.school}</p>
                      <p className="font-mono text-[11px] text-ink-soft mt-0.5">{e.period}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div>
                <p className="eyebrow mb-3">Contact</p>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-navy-950 link-underline pb-0.5"
                >
                  <Mail size={15} className="text-gold-600" />
                  {site.email}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
