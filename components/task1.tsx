import { TaskBox } from "./task-box"
import { AnswerTableTask1 } from "./answer-table-task1"

interface Task1Props {
  taskNumber: number
  instructions: string
  statements: string[]
  options: string[]
}

export function Task1({ taskNumber, instructions, statements, options }: Task1Props) {
  return (
    <TaskBox taskNumber={taskNumber} instructions={instructions}>
      <ol className="list-decimal pl-5 space-y-1 text-sm">
        {statements.map((statement, index) => (
          <li key={index} className="pl-1">
            {statement}
          </li>
        ))}
      </ol>
      <AnswerTableTask1 options={options} />
    </TaskBox>
  )
}
