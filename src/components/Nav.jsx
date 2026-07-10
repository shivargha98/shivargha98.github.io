import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Linkedin, Github, Menu, X, FileDown } from 'lucide-react'
import { site, navLinks } from '../data/site.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onProjectPage = pathname.startsWith('/projects/')

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-xl text-navy-950 tracking-tight"
          aria-label="Home"
        >
          {site.initials}
          <span className="text-gold-500">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-underline text-sm font-medium text-ink-soft hover:text-navy-950 pb-0.5"
            >
              {l.label}
            </a>
          ))}
          <span aria-hidden="true" className="h-5 w-px bg-line" />
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft hover:text-gold-600 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-soft hover:text-gold-600 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={site.resumePath}
            download="Shivargha_Bandopadhyay_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-sm font-medium bg-navy-950 text-paper px-3.5 py-1.5 rounded-md hover:bg-navy-800 transition-colors"
          >
            <FileDown size={15} />
            Résumé
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy-950"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-paper px-5 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-5 pt-1">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-soft">
              <Linkedin size={18} />
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-soft">
              <Github size={18} />
            </a>
            <a
              href={site.resumePath}
              download="Shivargha_Bandopadhyay_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-sm font-medium bg-navy-950 text-paper px-3.5 py-1.5 rounded-md"
            >
              <FileDown size={15} />
              Résumé
            </a>
          </div>
        </div>
      )}
      {onProjectPage && null}
    </header>
  )
}
