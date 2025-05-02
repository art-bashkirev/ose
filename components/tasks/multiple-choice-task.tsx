import { BaseTask } from "./base-task"

interface MultipleChoiceTaskProps {
  taskNumber: number
  questionText: string
  options: string[]
}

export function MultipleChoiceTask({ taskNumber, questionText, options }: MultipleChoiceTaskProps) {
  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        <p className="text-sm mb-3">{questionText}</p>

        <div className="space-y-1 text-sm">
          {options.map((option, index) => (
            <div key={index} className="flex">
              <div className="w-5">{index + 1})</div>
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
  )
}
