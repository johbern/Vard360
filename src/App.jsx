import { useLanguage } from './hooks/useLanguage'
import { useTriage } from './hooks/useTriage'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'
import Footer from './components/Footer'

export default function App() {
  const { lang, t, toggle } = useLanguage()
  const {
    step,
    scenario,
    questionIndex,
    result,
    selectScenario,
    answerQuestion,
    goBack,
    restart,
  } = useTriage()

  const showBack = step === 'question' || step === 'result'

  return (
    <div className="min-h-svh bg-slate-50 flex flex-col">
      <div className="max-w-lg mx-auto w-full flex flex-col min-h-svh bg-white shadow-sm">
        <Header
          t={t}
          onToggleLang={toggle}
          showBack={showBack}
          onBack={goBack}
        />

        {step === 'home' && (
          <HomeScreen t={t} onSelect={selectScenario} />
        )}

        {step === 'question' && scenario && (
          <QuestionScreen
            t={t}
            lang={lang}
            scenario={scenario}
            questionIndex={questionIndex}
            onAnswer={answerQuestion}
          />
        )}

        {step === 'result' && result && (
          <ResultScreen
            t={t}
            lang={lang}
            result={result}
            onRestart={restart}
          />
        )}

        <Footer t={t} />
      </div>
    </div>
  )
}
