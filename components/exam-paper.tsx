import { Task1 } from "./task1"
import { Task2 } from "./task2"
import { MultipleChoiceSection } from "./multiple-choice-section"

interface ExamPaperProps {
  title: string
  subtitle: string
  pageNumber: string
  task1: {
    instructions: string
    statements: string[]
    options: string[]
  }
  task2: {
    instructions: string
    statements: Array<{
      letter: string
      text: string
    }>
    options: string[]
  }
  multipleChoiceSection?: {
    instructions: string
    questionRange: string
    questions: Array<{
      questionNumber: number
      questionText: string
      options: string[]
    }>
  }
}

export function ExamPaper({ title, subtitle, pageNumber, task1, task2, multipleChoiceSection }: ExamPaperProps) {
  return (
    <div className="max-w-[21cm] mx-auto p-6 bg-white print:p-0 relative">
      <div className="flex justify-between mb-4 text-xs">
        <div>{title}</div>
        <div>{pageNumber}</div>
      </div>

      <h2 className="text-center font-bold mb-6 text-sm">{subtitle}</h2>

      <div className="pl-10">
        <Task1 taskNumber={1} instructions={task1.instructions} statements={task1.statements} options={task1.options} />
        <Task2 taskNumber={2} instructions={task2.instructions} statements={task2.statements} options={task2.options} />
      </div>

      {multipleChoiceSection && (
        <div className="pl-10 mt-8">
          <MultipleChoiceSection
            instructions={multipleChoiceSection.instructions}
            questionRange={multipleChoiceSection.questionRange}
            questions={multipleChoiceSection.questions}
          />
        </div>
      )}
    </div>
  )
}
