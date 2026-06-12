export default function QuestionScreen({ t, lang, scenario, questionIndex, onAnswer }) {
  const question = scenario.questions[questionIndex]
  const total = scenario.questions.length
  const progress = ((questionIndex) / total) * 100

  return (
    <main className="flex-1 px-4 py-8 max-w-lg mx-auto w-full">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            {t.question} {questionIndex + 1} {t.of} {total}
          </span>
          <span className="text-xs text-slate-400">{Math.round(((questionIndex + 1) / total) * 100)}%</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 rounded-full transition-all duration-500"
            style={{ width: `${((questionIndex + 1) / total) * 100}%` }}
            role="progressbar"
            aria-valuenow={questionIndex + 1}
            aria-valuemin={1}
            aria-valuemax={total}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-slate-800 mb-8 leading-snug">
        {question[lang]}
      </h2>

      <div className="space-y-3" role="group" aria-label={question[lang]}>
        {question.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onAnswer(question.id, opt.id)}
            className="w-full text-left px-5 py-4 rounded-2xl border-2 border-slate-200 bg-white hover:border-teal-400 hover:bg-teal-50 text-slate-700 font-medium text-base transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            {opt[lang]}
          </button>
        ))}
      </div>
    </main>
  )
}
