import { BaseTask } from "./base-task"

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

        <table className="border-collapse mt-4 mx-auto">
          <tbody>
            <tr>
              <td className="border border-gray-400 p-1 bg-white text-sm">Утверждение</td>
              {options.map((option, index) => (
                <td key={index} className="border border-gray-400 p-1 text-center w-8 text-sm">
                  {option}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-400 p-1 bg-white text-sm">Соответствие диалогу</td>
              {options.map((_, index) => (
                <td key={index} className="border border-gray-400 p-1 h-8"></td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </BaseTask>
  )
}
