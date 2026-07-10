import { Link } from 'react-router-dom'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { projects } from '../../data/projects.js'

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.18)}>
      <article className="group relative border border-line rounded-lg bg-white/60 p-6 sm:p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-16px_rgba(10,25,48,0.25)] hover:border-gold-500/50">
        <div className="flex items-baseline justify-between gap-3">
          <p className="eyebrow">{project.kind}</p>
          <span className="font-mono text-[11px] text-ink-soft">{project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-navy-950">
          <Link
            to={`/projects/${project.slug}`}
            className="after:absolute after:inset-0"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
          {project.oneLiner}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.chips.map((c) => (
            <li key={c} className="chip">
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-950 group-hover:text-gold-600 transition-colors">
            Read the story
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
          <span className="relative z-10 flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="text-ink-soft hover:text-gold-600 transition-colors"
            >
              <Github size={16} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="text-ink-soft hover:text-gold-600 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </span>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <SectionHeading
          eyebrow="03 · Projects"
          title="Things I've built"
          lede="Side projects with production instincts; each one explores a question I couldn't answer at the day job. Click through for the problem, the architecture, and what I learned."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
