import { useState } from 'react'
import scenarios from '../data/scenarios.json'

function evaluateRules(scenario, answers) {
  for (const rule of scenario.rules) {
    const match = Object.entries(rule.conditions).every(
      ([key, value]) => answers[key] === value
    )
    if (match) return rule
  }
  return null
}

export function useTriage() {
  const [step, setStep] = useState('home') // home | scenario | question | result
  const [scenarioId, setScenarioId] = useState(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const scenario = scenarioId ? scenarios[scenarioId] : null

  function selectScenario(id) {
    setScenarioId(id)
    setQuestionIndex(0)
    setAnswers({})
    setResult(null)
    setStep('question')
  }

  function answerQuestion(questionId, answerId) {
    const newAnswers = { ...answers, [questionId]: answerId }
    setAnswers(newAnswers)

    const nextIndex = questionIndex + 1

    if (nextIndex >= scenario.questions.length) {
      const rule = evaluateRules(scenario, newAnswers)
      setResult(rule)
      setStep('result')
    } else {
      setQuestionIndex(nextIndex)
    }
  }

  function goBack() {
    if (step === 'result') {
      setStep('question')
      setQuestionIndex(scenario.questions.length - 1)
      const lastQuestion = scenario.questions[scenario.questions.length - 1]
      const { [lastQuestion.id]: _, ...rest } = answers
      setAnswers(rest)
    } else if (step === 'question' && questionIndex > 0) {
      const prevQuestion = scenario.questions[questionIndex - 1]
      const { [prevQuestion.id]: _, ...rest } = answers
      setAnswers(rest)
      setQuestionIndex(questionIndex - 1)
    } else {
      setStep('home')
      setScenarioId(null)
      setAnswers({})
    }
  }

  function restart() {
    setStep('home')
    setScenarioId(null)
    setQuestionIndex(0)
    setAnswers({})
    setResult(null)
  }

  return {
    step,
    scenario,
    scenarioId,
    questionIndex,
    answers,
    result,
    selectScenario,
    answerQuestion,
    goBack,
    restart,
  }
}
