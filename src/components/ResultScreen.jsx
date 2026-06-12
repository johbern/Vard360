const OUTCOME_STYLES = {
  egenvard: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-800',
    button: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500',
    urgencyBadge: 'bg-emerald-100 text-emerald-700',
  },
  vardcentral: {
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800',
    button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    urgencyBadge: 'bg-blue-100 text-blue-700',
  },
  narakuten: {
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800',
    button: 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500',
    urgencyBadge: 'bg-amber-100 text-amber-700',
  },
  akuten: {
    bg: 'bg-red-50',
    border: 'border-red-300',
    iconBg: 'bg-red-100',
    iconText: 'text-red-700',
    badge: 'bg-red-100 text-red-800',
    button: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    urgencyBadge: 'bg-red-100 text-red-700',
  },
}

const OUTCOME_ICONS = {
  egenvard: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10S19.5 4 14 4z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 14.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  vardcentral: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 8V6a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 13v6M11 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  narakuten: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="14" cy="19" r="1" fill="currentColor"/>
    </svg>
  ),
  akuten: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 4L3 22h22L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 11v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="14" cy="19.5" r="1" fill="currentColor"/>
    </svg>
  ),
}

export default function ResultScreen({ t, lang, result, scenarioId, onRestart }) {
  if (!result) return null

  const outcomeId = result.outcome
  const outcome = t.outcomes[outcomeId]
  const styles = OUTCOME_STYLES[outcomeId]
  const isEmergency = outcomeId === 'akuten'

  return (
    <main className="flex-1 px-4 py-8 max-w-lg mx-auto w-full">
      <div className={`rounded-3xl border-2 p-6 mb-6 ${styles.bg} ${styles.border}`}>
        <div className="flex items-start gap-4 mb-5">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${styles.iconBg} ${styles.iconText}`}>
            {OUTCOME_ICONS[outcomeId]}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`inline-flex items-center text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full mb-2 ${styles.urgencyBadge}`}>
              {outcome.urgency}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
              {outcome.title}
            </h2>
            <p className="text-slate-600 mt-1 text-base">
              {outcome.subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
              {t.why}
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              {result.reason[lang]}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
          {t.whatToDo}
        </h3>
        <a
          href={outcome.actionUrl}
          target={outcome.actionUrl.startsWith('tel:') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl text-white font-semibold text-base transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.button}`}
          aria-label={outcome.action}
        >
          {isEmergency && (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M6.5 3.5C5 5 4 7.5 4 10s1 5 2.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M13.5 3.5C15 5 16 7.5 16 10s-1 5-2.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="10" r="3" stroke="white" strokeWidth="1.5"/>
            </svg>
          )}
          {outcome.action}
          {!outcome.actionUrl.startsWith('tel:') && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </a>
      </div>

      <button
        onClick={onRestart}
        className="w-full py-3.5 px-6 rounded-2xl border-2 border-slate-200 text-slate-600 font-medium text-base hover:border-slate-300 hover:bg-slate-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
      >
        {t.restartButton}
      </button>

      <p className="mt-6 text-xs text-slate-400 text-center leading-relaxed">
        {t.disclaimer}
      </p>
    </main>
  )
}
