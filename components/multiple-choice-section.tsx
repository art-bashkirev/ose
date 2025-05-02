import { SectionHeader } from "./section-header"
import { MultipleChoiceQuestion } from "./multiple-choice-question"

interface Question {
  questionNumber: number
  questionText: string
  options: string[]
}

interface MultipleChoiceSectionProps {
  instructions: string
  questionRange: string
  questions: Question[]
}

export function MultipleChoiceSection({ instructions, questionRange, questions }: MultipleChoiceSectionProps) {
  return (
    <div>
      <SectionHeader instructions={instructions} questionRange={questionRange} />

      <div className="pl-10">
        {questions.map((question) => (
          <MultipleChoiceQuestion
            key={question.questionNumber}
            questionNumber={question.questionNumber}
            questionText={question.questionText}
            options={question.options}
          />
        ))}
      </div>
    </div>
  )
}
