import { BaseTask } from "./base-task"
import { AnswerTable } from "@/components/ui/answer-table"

interface Statement {
  letter: string
  text: string
}

interface TrueFalseNotStatedTaskProps {
  taskNumber: number
  statements: Statement[]
  options: string[]
}

export function TrueFalseNotStatedTask({ taskNumber, statements, options }: TrueFalseNotStatedTaskProps) {
  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        <div className="space-y-1 text-sm">
          {statements.map((statement, index) => (
            <div key={index} className="flex">
              <div className="w-5 font-bold">{statement.letter}.</div>
              <div>{statement.text}</div>
            </div>
          ))}
        </div>

        <AnswerTable headers={options} rowLabel="Утверждение" className="mt-4" />
      </div>
    </BaseTask>
  )
}
