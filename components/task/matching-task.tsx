import { BaseTask } from "./base-task"

interface MatchingTaskProps {
  taskNumber: number
  statements: string[]
  options: string[]
}

export function MatchingTask({ taskNumber, statements, options }: MatchingTaskProps) {
  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          {statements.map((statement, index) => (
            <li key={index} className="pl-1">
              {statement}
            </li>
          ))}
        </ol>

        <table className="border-collapse mt-4 mx-auto">
          <tbody>
            <tr>
              <td className="border border-gray-400 p-1 bg-white text-sm">Говорящий</td>
              {options.map((option, index) => (
                <td key={index} className="border border-gray-400 p-1 text-center w-8 text-sm">
                  {option}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-gray-400 p-1 bg-white text-sm">Утверждение</td>
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
