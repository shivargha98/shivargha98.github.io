import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, lede }) {
  return (
    <Reveal className="mb-10 sm:mb-14 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-950 tracking-tight">
        {title}
      </h2>
      {lede && <p className="mt-4 text-ink-soft leading-relaxed">{lede}</p>}
    </Reveal>
  )
}
