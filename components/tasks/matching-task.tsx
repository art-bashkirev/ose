import { BaseTask } from "./base-task"
import { OptionList } from "@/components/ui/option-list"
import { AnswerTable } from "@/components/ui/answer-table"

interface MatchingTaskProps {
  taskNumber: number
  statements: string[]
  options: string[]
}

export function MatchingTask({ taskNumber, statements, options }: MatchingTaskProps) {
  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        <OptionList options={statements} />
        <AnswerTable headers={options} rowLabel="Говорящий" className="mt-4" />
      </div>
    </BaseTask>
  )
}
