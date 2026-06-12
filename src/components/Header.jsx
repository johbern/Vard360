export default function Header({ t, onToggleLang, showBack, onBack }) {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b border-slate-200 bg-white sticky top-0 z-10">
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-slate-100 -ml-1"
            aria-label={t.backButton}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.backButton}
          </button>
        )}
        {!showBack && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 2a7 7 0 100 14A7 7 0 009 2z" stroke="white" strokeWidth="1.5"/>
                <path d="M9 6v4M9 12v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-semibold text-slate-800 text-lg">{t.appName}</span>
          </div>
        )}
      </div>

      <button
        onClick={onToggleLang}
        className="text-sm font-medium text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 px-3 py-2 rounded-lg transition-colors border border-teal-200"
        aria-label={`Switch language to ${t.languageToggle}`}
      >
        {t.languageToggle}
      </button>
    </header>
  )
}
