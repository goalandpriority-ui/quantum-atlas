# QuantumAtlas

The open encyclopedia of quantum computing — news, research, a growing
dictionary, company and hardware databases, and an interactive learning path.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- Deployed via **GitHub → Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra config needed. Deploy.

## Project Structure

```
app/
  page.tsx                    → Homepage
  layout.tsx                  → Root layout (Header/Footer)
  globals.css                 → Design tokens, fonts, prose styles

  learn/                       → Learning Center
    page.tsx                   → Level 1-4 overview
    what-is-quantum-computing/
    what-is-a-qubit/
    bit-vs-qubit/

  dictionary/                  → Quantum Dictionary
    page.tsx                   → All terms index
    qubit/
    entanglement/

  companies/                   → Quantum Companies Database
    page.tsx                   → All companies index
    ibm/

  guide/
    quantum-computing-complete-guide/  → Pillar page

components/
  Header.tsx, Footer.tsx, Section.tsx
  BlochMark.tsx                → Signature "Bloch sphere" logo/motif
  TermPage.tsx                 → Reusable dictionary term template
  CompanyPage.tsx              → Reusable company profile template

lib/content/
  dictionary.ts                → Dictionary term data (add new terms here)
  companies.ts                 → Company data (add new companies here)
  learning.ts                  → Learning Center structure
```

## Adding New Content

### New Dictionary Term

1. Add an entry to `lib/content/dictionary.ts` following the existing shape.
2. Create a new folder `app/dictionary/<slug>/page.tsx` — copy the structure
   from `app/dictionary/qubit/page.tsx`, just change the slug and metadata.

### New Company

1. Add an entry to `lib/content/companies.ts`.
2. Create `app/companies/<slug>/page.tsx` — copy from `app/companies/ibm/page.tsx`.

### New Learning Article

1. Mark the article `available: true` in `lib/content/learning.ts`.
2. Create `app/learn/<slug>/page.tsx` with the article content (1500-2500
   words recommended, following the style of existing Level 1 articles).

## Roadmap

- **Phase 1** (current): Learning Center, Dictionary, Pillar Guide, News (static)
- **Phase 2**: Companies, Hardware Database, Interactive Timeline
- **Phase 3**: Research Papers, Jobs, Courses
- **Phase 4**: Quantum Simulator, Maps, Patent Tracker
- **Phase 5**: Community, AI Quantum Assistant
