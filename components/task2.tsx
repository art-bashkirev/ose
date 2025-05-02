import { TaskBox } from "./task-box"
import { AnswerTableTask2 } from "./answer-table-task2"

interface Task2Props {
  taskNumber: number
  instructions: string
  statements: Array<{
    letter: string
    text: string
  }>
  options: string[]
}

export function Task2({ taskNumber, instructions, statements, options }: Task2Props) {
  return (
    <TaskBox taskNumber={taskNumber} instructions={instructions}>
      <div className="space-y-1 text-sm">
        {statements.map((statement, index) => (
          <div key={index} className="flex">
            <div className="w-5 font-bold">{statement.letter}.</div>
            <div>{statement.text}</div>
          </div>
        ))}
      </div>
      <AnswerTableTask2 options={options} />
    </TaskBox>
  )
}
