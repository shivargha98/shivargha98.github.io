export const projects = [
  {
    slug: 'dbquery-agent',
    name: 'Text2SQL Agent',
    year: '2025',
    kind: 'Agentic AI',
    oneLiner:
      'Ask a database questions in plain English — a LangGraph agent that generates SQL, guards it, self-corrects, and charts the answer.',
    chips: ['LangGraph', 'Gemini', 'Chainlit', 'Plotly'],
    github:
      'https://github.com/shivargha98/langGraph-agentic-playground/tree/main/DBQuery_Agent',
    live: null,
    problem:
      'Business users have questions their databases can answer, but every question becomes a ticket for a data analyst. The gap isn’t data — it’s SQL. A trustworthy natural-language interface needs to do more than generate a query: it has to refuse off-topic requests, block destructive statements, and know when its own answer isn’t good enough.',
    approach:
      'Built as a directed LangGraph pipeline with conditional routing. A topic classifier filters off-topic queries before any SQL is written. Generated SQL passes through a guardrail that blocks destructive operations (DELETE, DROP), then a reflection step where a local Qwen model reviews and optimizes the query. After execution, a ReACT agent picks the right visualization and renders it in Plotly. Finally, an LLM judge scores the output — and if quality falls short, the pipeline retries with feedback.',
    pipeline: [
      'Topic Classifier',
      'SQL Generator',
      'Guardrail',
      'Reflection',
      'Executor',
      'Viz Agent',
      'LLM Judge',
    ],
    pipelineNote: 'LLM Judge routes back to SQL Generator on low-quality output',
    stack: [
      'LangGraph + LangChain orchestration',
      'Gemini 2.0 Flash, local Qwen 2.5 (Ollama), Groq Llama 3.1 — multi-model routing',
      'guardrails-ai, sqlparse, sqlglot for query safety',
      'Chainlit web UI · Plotly visualizations',
      'Phoenix (Arize), AgentOps, LangSmith observability',
    ],
    highlights: [
      'Security-first design: destructive SQL operations are structurally blocked, not just prompted away',
      'Self-correcting loop — an LLM judge evaluates output quality and triggers retries with feedback',
      'Multi-model architecture routes each step to the cheapest model that can do the job',
      'Full eval + observability stack (Phoenix, AgentOps) rather than vibes-based iteration',
    ],
  },
  {
    slug: 'docufetch',
    name: 'docuFetch',
    year: '2025',
    kind: 'Agentic Build Process',
    oneLiner:
      'A local RAG assistant — built almost entirely by two custom autonomous agent loops that ran the PM lifecycle and the engineering delegation.',
    chips: ['Claude Agents', 'FastAPI', 'React', 'ChromaDB'],
    github: 'https://github.com/shivargha98/docuFetch',
    live: null,
    problem:
      'The product itself is a locally-running RAG system: watch a folder, embed the documents, answer questions with citations. But the real experiment was the process — can a 0→1 product, backend and frontend, be shipped by autonomous agents with a human only steering? Most “AI builds an app” demos skip the unglamorous parts: requirements, decomposition, testing, integration.',
    approach:
      'Two coordinated agent loops, defined in .claude/agents/. The PM-Loop runs a structured product lifecycle: it takes a one-sentence product description and produces a PRD, then a feature list, then implementation issues, then a test plan — each document feeding the next, with decision records kept throughout. The Orchestrator then manages the build: it analyzes issue dependencies, writes worker briefs, delegates to parallel coding agents, and integrates the results. By design, it never writes code itself — its job is to read, plan, delegate, and synthesize.',
    pipeline: ['Idea', 'PRD', 'Feature List', 'Issues', 'Test Plan', 'Orchestrator', 'Worker Agents'],
    pipelineNote: 'PM-Loop produces the first five stages; the Orchestrator delegates the rest',
    stack: [
      'Claude agent definitions (.claude/agents/) — PM-Loop + Orchestrator',
      'FastAPI backend · ChromaDB local vector store',
      'OpenRouter embeddings (nvidia/llama-nemotron-embed-vl)',
      'Claude via langchain-anthropic for answers with citations',
      'React + Tailwind CSS + Vite frontend',
    ],
    highlights: [
      'The PM lifecycle itself was automated — PRD → features → issues → test plan, each stage feeding the next',
      'Orchestrator agent delegates to parallel workers and never writes code — pure read, plan, delegate, synthesize',
      'Working product at the end: folder-watching RAG with source-cited answers, fully local',
      'A process case study for how AI PMs can structure agentic delivery, not just agentic products',
    ],
  },
  {
    slug: 'docufetch-graph',
    name: 'docuFetch Graph',
    year: '2025',
    kind: 'Knowledge Systems',
    oneLiner:
      'A personal “LLM wiki” — your documents become a traversable concept graph, and every answer shows the path it took to get there.',
    chips: ['Claude Haiku', 'NetworkX', 'react-force-graph', 'FastAPI'],
    github: 'https://github.com/shivargha98/docuFetch_graph',
    live: null,
    problem:
      'Standard RAG retrieves chunks, but it can’t explain why — you get an answer and a source file, not a line of reasoning. For personal knowledge bases, that opacity breeds distrust. The idea: what if retrieval was a walk through an explicit graph of concepts, and you could watch it happen?',
    approach:
      'Ingestion chunks each file and has Claude Haiku extract concepts and typed relations per chunk; duplicate concepts across files are merged using embedding similarity with LLM adjudication. The result is a NetworkX concept graph rendered as an interactive 2D constellation — hover for names, click for source files and linked concepts, edge colors encoding relation types. At query time, vector search seeds the traversal, which hops the graph (max 3 hops, 15 nodes) and highlights its path in real time. If no relevant path exists, it says so instead of guessing.',
    pipeline: ['Documents', 'Chunking', 'Concept Extraction', 'Graph Merge', 'Vector Seed', 'Graph Traversal', 'Grounded Answer'],
    pipelineNote: 'Traversal is capped at 3 hops / 15 nodes and rendered live',
    stack: [
      'Claude Haiku for concept + relation extraction and adjudication',
      'NetworkX graph engine · Chroma vector store',
      'fastembed / bge-small local embeddings',
      'FastAPI backend · React + react-force-graph frontend',
      'Watched folders auto-ingest on change',
    ],
    highlights: [
      'Every answer is explainable — the traversal path is highlighted live as the system reasons',
      'Typed relations between concepts, not just similarity scores',
      'Honest failure mode: “no relevant document” instead of a hallucinated answer',
      'Concept deduplication across files via embedding similarity + LLM adjudication',
    ],
  },
  {
    slug: 'ipl-dashboard',
    name: 'IPL Analytics Dashboard',
    year: '2025',
    kind: 'Data Product',
    oneLiner:
      'Ball-by-ball IPL analytics with interactive match insights — deployed live and built on efficient pipelines over large sports datasets.',
    chips: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    github: 'https://github.com/shivargha98/cricket_analytics',
    live: 'https://ipl-viz-sb.streamlit.app',
    problem:
      'Cricket generates some of the densest event data in sport — every ball is a row — but most fan-facing stats stop at averages and strike rates. Ball-by-ball data can answer far sharper questions about matchups, phases, and momentum, if it’s made explorable.',
    approach:
      'A Streamlit dashboard over ball-by-ball IPL data, backed by feature-engineering work in ODI and T20 analysis notebooks. The data pipeline aggregates raw deliveries into match, phase, and player views that stay responsive at interactive speeds. The repo also includes a cricket score simulator module built on the same foundations.',
    pipeline: ['Ball-by-ball Data', 'Feature Engineering', 'Aggregation Pipelines', 'Interactive Dashboard'],
    pipelineNote: 'Deployed live on Streamlit Cloud',
    stack: [
      'Python · Pandas for data pipelines',
      'Streamlit dashboard, deployed on Streamlit Cloud',
      'Plotly interactive charts',
      'Jupyter notebooks for ODI / T20 feature engineering',
      'uv for dependency management',
    ],
    highlights: [
      'Live and public: ipl-viz-sb.streamlit.app',
      'Handles large ball-by-ball datasets with responsive interactive filtering',
      'Feature-engineering notebooks double as analysis documentation',
      'Includes a cricket score simulator built on the same data foundations',
    ],
  },
  {
    slug: 'rag-playground',
    name: 'RAG Playground',
    year: '2025',
    kind: 'Voice + RAG',
    oneLiner:
      'From RAG fundamentals to a voice-enabled health-insurance assistant — hybrid search, HyDE, and an agent that plans, reflects, and retries.',
    chips: ['Gemini', 'LangGraph', 'FAISS', 'ElevenLabs'],
    github: 'https://github.com/shivargha98/rag_playground',
    live: null,
    problem:
      'RAG looks simple in demos and falls apart on real questions — vague queries, multi-part questions, answers that need both policy text and live provider data. This project works through the gap deliberately, from foundational patterns to a production-shaped capstone: a conversational assistant that answers health-insurance members’ questions about their own policy.',
    approach:
      'The capstone is a LangGraph state machine: authenticate the member against MongoDB, retrieve policy details via FAISS RAG, verify provider-network questions against live data, then synthesize with Gemini. Retrieval quality comes from hybrid search (BM25 + vector, re-ranked), query decomposition, and HyDE query rewriting. A ReACT-style agent orchestrates domain retrievers plus Tavily web search, with planning, reflection, and retry built in. ElevenLabs gives it a voice interface on both ends.',
    pipeline: ['Member Auth', 'Policy Retrieval', 'Provider Verification', 'Synthesis', 'Voice Response'],
    pipelineNote: 'ReACT agent with planning, reflection, and retry across the flow',
    stack: [
      'Gemini 2.5 Flash · LangChain + LangGraph',
      'FAISS, ChromaDB, Pinecone vector stores · BM25 hybrid search',
      'HyDE + query decomposition for retrieval quality',
      'ElevenLabs speech-to-text / text-to-speech',
      'MongoDB member data · Streamlit UI',
    ],
    highlights: [
      'Voice-first UX: members ask in speech and get spoken answers grounded in their actual policy',
      'Hybrid BM25 + vector retrieval with re-ranking, measurably better than either alone',
      'Directly productized as the “Voice Agent (Health Insurance)” featured on my resume',
      'Progressive repo structure — each stage of RAG maturity is a working, documented example',
    ],
  },
]
