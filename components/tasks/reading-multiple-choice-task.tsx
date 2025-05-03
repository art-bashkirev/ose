import { BaseTask } from "./base-task"

interface ReadingMultipleChoiceQuestion {
  id: number
  questionText: string
  options: string[]
}

interface ReadingMultipleChoiceTaskProps {
  taskNumber: number
  questions: ReadingMultipleChoiceQuestion[]
}

export function ReadingMultipleChoiceTask({ taskNumber, questions }: ReadingMultipleChoiceTaskProps) {
  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <BaseTask key={question.id} taskNumber={taskNumber + index}>
          <div className="p-3">
            <p className="text-sm mb-3">{question.questionText}</p>

            <div className="space-y-1 text-sm">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex">
                  <div className="w-5">{optionIndex + 1})</div>
                  <div>{option}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center">
              <div className="text-sm mr-2">Ответ:</div>
              <div className="w-8 h-8 border border-gray-400"></div>
            </div>
          </div>
        </BaseTask>
      ))}
    </div>
  )
}
