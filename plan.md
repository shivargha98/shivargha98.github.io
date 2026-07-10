# Portfolio Site — Design Plan

**Goal:** A portfolio at `shivargha98.github.io` (later `shivargha.com`) positioned for **AI Product Manager** roles — proving both technical depth (AI/ML engineering) and product thinking (MBA + consulting).

**Stack:** React + Tailwind CSS, Vite, deployed via GitHub Actions to GitHub Pages.

---

## 1. Site Map

```
/                          Landing page (single scroll, anchor-nav "tabs")
  ├─ #hero
  ├─ #about              Professional experience + internships
  ├─ #skills
  ├─ #projects           5 cards → link out to deep-dive pages
  └─ #case-studies        Empty state for now

/projects/dbquery-agent          Text2SQL Agent deep dive
/projects/docufetch               docuFetch (agentic build loops)
/projects/docufetch-graph         docuFetch Graph (LLM wiki)
/projects/ipl-dashboard           Cricket Analytics — IPL Dashboard
/projects/rag-playground          RAG Playground (health insurance voice agent)
```

Rationale: recruiters skim the landing page in under a minute; anyone who clicks a project gets a real problem→approach→outcome narrative instead of a GitHub link dump. Same page template will be reused for Case Studies later.

---

## 2. Visual Design System — "Consulting Editorial"

Echoes the resume's existing navy/gold branding so the resume and site feel like one brand.

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FBF9F4` | page background (warm off-white, not stark white) |
| `--ink` | `#1C2430` | body text |
| `--navy-950` | `#0A1930` | headline text, hero panel, footer |
| `--navy-800` | `#16294A` | secondary dark surface |
| `--gold-500` | `#C68A3D` | accent — links, underlines, chip borders, CTA |
| `--line` | `#E4DFD4` | hairline dividers |

**Typography:**
- Headlines: **Fraunces** (serif, characterful — gives the "quirk" without breaking professionalism)
- Body / UI: **Inter**
- Tags / tech chips / metrics: **JetBrains Mono** (small caps, uppercase tracking)

**Animation (subtle, not extravagant):**
- Scroll-reveal fade/slide-up per section (Framer Motion + Intersection Observer)
- Hover lift + shadow on project cards
- Animated gold underline on nav links on hover/active
- Count-up on key metrics (e.g. "95% accuracy", "53 months experience")
- Page fade transition between landing ↔ project deep-dive pages

---

## 3. Section-by-Section Content

### Hero
```
┌──────────────────────────────────────────────────────────────┐
│  SB   About Skills Work Case Studies  [in][GH]  [Résumé ↓]    │
├──────────────────────────────────────────────────────────────┤
│   Shivargha Bandopadhyay                     ┌──────────┐    │
│   AI Product Manager                         │  photo   │    │
│   GenAI & Computer Vision Specialist          │ (framed) │    │
│   turned Product Builder · MBA, IIM Udaipur   └──────────┘    │
│                                                                 │
│   [ View Projects ]     [ Download Résumé ]                    │
└──────────────────────────────────────────────────────────────┘
```
Photo: `ShivarghaProfilePic.png` — will be cropped/optimized to a portrait WebP (~800×1067) for perf.

**Social links** (nav + footer, icon-only via `lucide-react`):
- LinkedIn → https://www.linkedin.com/in/shivargha-bandopadhyay-332b0b17/
- GitHub → https://github.com/shivargha98

### About
Two-part narrative, pulled straight from the resume:
- **Summary** — product leader bridging AI/ML engineering and business strategy; 53 months full-time across BFSI, defense, surveillance; now MBA (Digital Enterprise Management, IIM Udaipur).
- **Timeline** (professional experience + internships, reverse-chronological):
  - Transformation Excellence Consultant, Accenture (Apr 2026–Present)
  - Applied AI Product Manager (Intern), Stealth AI Startup (Jan–Apr 2026)
  - Computer Vision Engineer, Niyogin AI (Jun 2024–Apr 2025)
  - Computer Vision Engineer, Orbo AI (Jun 2022–Jun 2024)
  - Engineer – Image Processing, Azista Industries (Sep 2021–Jun 2022)
  - Deep Learning Engineer, Pivotchain Solutions (Nov 2020–Sep 2021)

  Each entry: role · company · dates · one-line theme (e.g. "Enterprise Agentic AI · Multi-Agent Product Build") + 2–3 top bullets, not the full resume wall of text.
- **Contact:** email — `shivarghabandopadhyay@gmail.com` — plus LinkedIn and GitHub icon links (no phone number on the public site).

### Skills
Two grouped chip clusters (not a boring bullet list):
- **Product & Strategy:** Product Strategy & Roadmapping, AI/ML Product Development, Stakeholder Management, Workflow Automation & KPI Optimization, GTM Experimentation, Cross-functional Leadership
- **Technical:** Python (Pandas/NumPy/Sklearn/PyTorch/TensorFlow), LangChain/LangGraph, RAG (text/multimodal/agentic), Agentic Patterns (ReACT/Reflection/LLM-as-Judge), Computer Vision & OCR, MCP/A2A, Docker/Airflow, Claude Code/OpenAI Codex

### Projects (cards on landing page)

```
┌─────────────────────────────┐
│ TEXT2SQL AGENT           2025│
│ Natural language → SQL, self-│
│ correcting, auto-charted.    │
│ [LangGraph][Gemini][Chainlit]│
│ View Case Study →   GitHub ↗ │
└─────────────────────────────┘
```

| Project | Card one-liner | Tech chips |
|---|---|---|
| Text2SQL Agent (`DBQuery_Agent`) | NL→SQL agent with guardrails, retry-on-failure self-correction, and auto-generated charts | LangGraph, Gemini, Chainlit, Plotly |
| docuFetch | Local RAG assistant built almost entirely by two custom autonomous "loop" agents (PM-Loop + Orchestrator) | FastAPI, Claude, React, ChromaDB |
| docuFetch Graph | Turns a folder of docs into a personal "LLM wiki" — a traversable, explainable concept graph | FastAPI, NetworkX, Claude Haiku, react-force-graph |
| IPL Dashboard (Cricket Analytics) | Ball-by-ball IPL analytics dashboard, deployed live | Python, Pandas, Streamlit |
| RAG Playground | Health-insurance voice assistant: hybrid search, HyDE, planning/reflection agent | Gemini, LangGraph, FAISS, ElevenLabs |

Each links to its deep-dive page **and** out to GitHub (IPL Dashboard also links its live Streamlit demo).

### Project deep-dive page template
```
┌──────────────────────────────────────────┐
│ ← Back to portfolio                       │
│ TEXT2SQL AGENT                            │
│ one-line description                      │
│ [GitHub ↗]  [tech chips]                  │
├──────────────────────────────────────────┤
│ THE PROBLEM                               │
│ THE APPROACH   (simple flow diagram)      │
│ TECH STACK     (chips)                    │
│ HIGHLIGHTS     (bullet outcomes)          │
└──────────────────────────────────────────┘
```

Content per project (drawn from each repo's README — summarized, not copy-pasted):

1. **Text2SQL Agent** — Problem: non-technical users need DB answers in plain English. Approach: `Topic Classifier → SQL Generator → SQL Guardrail → Reflection (local Qwen) → Executor → ReACT viz agent → LLM Judge (retry loop)`. Highlights: blocks destructive SQL ops, multi-model routing (Gemini/Qwen/Groq), Phoenix/AgentOps eval tracing.
2. **docuFetch** — Problem: wanted to test whether a 0→1 product (backend+frontend) could be built almost entirely by autonomous agents. Approach: **PM-Loop** agent turns a one-line idea into PRD → feature list → issues → test plan; **Orchestrator** agent reads issue dependencies and delegates to parallel worker agents, never writing code itself. Highlights: this is a meta case study — process innovation as much as product.
3. **docuFetch Graph** — Problem: standard RAG can't explain *why* it retrieved something. Approach: Claude Haiku extracts concepts + typed relations per chunk → merged into a NetworkX graph → visualized as an interactive "neon constellation" → queries traverse the graph (max 3 hops/15 nodes) with the path highlighted live. Highlights: grounded answers, explicit "no answer found" instead of hallucination.
4. **IPL Dashboard** — Problem: ball-by-ball cricket data is dense and underused. Approach: feature-engineering notebooks (ODI/T20) feed a Streamlit dashboard for interactive match/player exploration. Highlights: deployed live at `ipl-viz-sb.streamlit.app`.
5. **RAG Playground** — Problem: explore RAG techniques progressively, capstone as a real assistant. Approach: LangGraph state machine — auth → policy retrieval (FAISS) → provider verification → Gemini synthesis; hybrid BM25+vector search, HyDE query rewriting, voice I/O via ElevenLabs. Highlights: matches the "Voice Agent (Health Insurance)" resume bullet directly.

### Case Studies
Empty state — a single centered card:
```
┌───────────────────────────────┐
│   Case studies are coming     │
│   soon — check back end of    │
│   July 2026.                  │
└───────────────────────────────┘
```
Same route/template will hold real entries later; no rework needed.

### Footer
Email, LinkedIn, and GitHub icon links (no phone number on the public site).

---

## 4. Tech Stack & Deployment

- **Build:** Vite + React (JSX, no TypeScript — keeps this small project simple)
- **Styling:** Tailwind CSS
- **Routing:** `react-router-dom`, `BrowserRouter` + the standard SPA-on-GitHub-Pages redirect trick (`404.html` + a small inline script in `index.html`) — gives clean URLs like `shivargha.com/projects/dbquery-agent` instead of `/#/...`, which matters once the custom domain is live.
- **Animation:** Framer Motion (scroll reveals, page transitions) + `lucide-react` for icons
- **Content:** project/experience data lives in plain JS data files (`src/data/projects.js`, `src/data/experience.js`) so future edits (or adding case studies) don't require touching component code
- **Deploy:** GitHub Actions workflow — build on push to `main`, deploy via `actions/upload-pages-artifact` + `actions/deploy-pages` (no separate `gh-pages` branch needed)
- **Custom domain:** `public/CNAME` containing `shivargha.com` — **held off until you confirm DNS is pointed**, since adding it prematurely can break the `.github.io` URL
- **Assets:** profile photo optimized to WebP; the résumé PDF (`1_ShivarghaBandopadhyay_Resume_1.pdf`, the one you attached) copied into `public/resume.pdf` for the download button

---

## 5. Out of Scope (for now)

- Case study content (you're uploading by end of month — structure is ready, content isn't)
- Dark mode (explicitly light-only per your request)
- A CMS or blog engine (e.g. Contentful/Sanity/MDX) for editing project write-ups through a web UI — plain data files (`src/data/projects.js`) are simpler and sufficient for just 5 projects

---

## Next Step

If this looks good, I'll turn it into a step-by-step implementation plan (scaffolding → design system → sections → project pages → animations → deploy pipeline) and start building.
