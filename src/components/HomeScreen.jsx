const SCENARIO_ICONS = {
  cold: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 8v4M14 16v4M8 14h4M16 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="2" fill="currentColor"/>
    </svg>
  ),
  injury: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M10 6l8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 6l-8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  chest: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 6c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 10v3.5l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  mental: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 6c-4.4 0-8 3.1-8 7 0 2.5 1.4 4.8 3.5 6.1V22l3-2h1.5c4.4 0 8-3.1 8-7s-3.6-7-8-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10.5 14.5s.8 1.5 3.5 1.5 3.5-1.5 3.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

const SCENARIO_COLORS = {
  cold: 'text-sky-600 bg-sky-50 border-sky-200',
  injury: 'text-amber-600 bg-amber-50 border-amber-200',
  chest: 'text-red-600 bg-red-50 border-red-200',
  mental: 'text-violet-600 bg-violet-50 border-violet-200',
}

const SCENARIO_HOVER = {
  cold: 'hover:border-sky-400 hover:bg-sky-100',
  injury: 'hover:border-amber-400 hover:bg-amber-100',
  chest: 'hover:border-red-400 hover:bg-red-100',
  mental: 'hover:border-violet-400 hover:bg-violet-100',
}

export default function HomeScreen({ t, onSelect }) {
  const scenarios = ['cold', 'injury', 'chest', 'mental']

  return (
    <main className="flex-1 px-4 py-8 max-w-lg mx-auto w-full">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-600 mb-5">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4z" stroke="white" strokeWidth="1.5"/>
            <path d="M16 11v6M16 20v1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 className="text-3xl font-semibold text-slate-900 mb-3 leading-tight">
          {t.appTagline}
        </h1>
        <p className="text-slate-600 text-base leading-relaxed max-w-sm mx-auto">
          {t.appDescription}
        </p>
      </div>

      <h2 className="text-base font-semibold text-slate-700 mb-4 text-left">
        {t.selectConcern}
      </h2>

      <div className="space-y-3">
        {scenarios.map((id) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-150 cursor-pointer ${SCENARIO_COLORS[id]} ${SCENARIO_HOVER[id]}`}
          >
            <div className="flex-shrink-0">
              {SCENARIO_ICONS[id]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-base text-slate-800">{t.scenarios[id]}</div>
              <div className="text-sm text-slate-500 mt-0.5">{t.scenarioDescriptions[id]}</div>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-slate-400" aria-hidden="true">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ))}
      </div>

      <p className="mt-8 text-xs text-slate-400 text-center leading-relaxed">
        {t.disclaimer}
      </p>
    </main>
  )
}
