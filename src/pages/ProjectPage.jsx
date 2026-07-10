import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import PipelineDiagram from '../components/PipelineDiagram.jsx'
import { projects } from '../data/projects.js'

function Block({ label, children }) {
  return (
    <Reveal className="border-t border-line pt-8">
      <div className="grid sm:grid-cols-[180px_1fr] gap-4 sm:gap-10">
        <p className="eyebrow pt-1">{label}</p>
        <div>{children}</div>
      </div>
    </Reveal>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const reduce = useReducedMotion()
  const index = projects.findIndex((p) => p.slug === slug)

  if (index === -1) return <Navigate to="/" replace />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <motion.div
      key={slug}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 py-14 sm:py-20">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-gold-600 transition-colors"
        >
          <ArrowLeft size={15} />
          Back to portfolio
        </Link>

        <header className="mt-10">
          <div className="flex items-baseline gap-4">
            <p className="eyebrow">{project.kind}</p>
            <span className="font-mono text-xs text-ink-soft">{project.year}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-navy-950 tracking-tight">
            {project.name}
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">
            {project.oneLiner}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-950 text-paper px-4 py-2 rounded-md text-sm font-medium hover:bg-navy-800 transition-colors"
            >
              <Github size={15} />
              View on GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold-500 text-gold-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gold-100 transition-colors"
              >
                <ExternalLink size={15} />
                Live demo
              </a>
            )}
            <ul className="flex flex-wrap gap-2">
              {project.chips.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="mt-14 space-y-12">
          <Block label="The problem">
            <p className="text-ink leading-relaxed">{project.problem}</p>
          </Block>

          <Block label="The approach">
            <p className="text-ink leading-relaxed mb-8">{project.approach}</p>
            <PipelineDiagram stages={project.pipeline} note={project.pipelineNote} />
          </Block>

          <Block label="Tech stack">
            <ul className="space-y-2.5">
              {project.stack.map((s) => (
                <li key={s} className="text-sm text-ink-soft leading-relaxed flex gap-2.5">
                  <span aria-hidden="true" className="text-gold-500 mt-0.5 shrink-0">
                    ›
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Highlights">
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="text-ink leading-relaxed flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <div className="mt-16 border-t border-line pt-8 flex justify-end">
          <Link
            to={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-3 text-right"
          >
            <span>
              <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                Next project
              </span>
              <span className="block font-display text-lg font-semibold text-navy-950 group-hover:text-gold-600 transition-colors">
                {next.name}
              </span>
            </span>
            <ArrowRight
              size={18}
              className="text-gold-500 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
