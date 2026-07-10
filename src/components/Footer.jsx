import { Mail, Linkedin, Github } from 'lucide-react'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-paper/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-paper">{site.name}</p>
          <p className="text-sm text-paper/60 mt-1">
            AI Product Manager · Building agentic systems, shipping products
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm hover:text-gold-500 transition-colors"
          >
            <Mail size={16} />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gold-500 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gold-500 transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
