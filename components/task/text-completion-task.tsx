import { BaseTask } from "./base-task"
import ReactMarkdown from "react-markdown"

interface TextCompletionTaskProps {
  taskNumber: number
  text: string
  options: string[]
}

export function TextCompletionTask({ taskNumber, text, options }: TextCompletionTaskProps) {
  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        {/* Text with gaps */}
        <div className="text-sm mb-4">
          <ReactMarkdown
            className="text-completion-text"
            components={{
              p: ({ children }) => <p className="mb-3">{children}</p>,
              strong: ({ children }) => <strong className="px-1 py-0.5 bg-gray-200">{children}</strong>,
            }}
          >
            {text}
          </ReactMarkdown>
        </div>

        {/* Options list */}
        <div className="text-sm mb-4">
          <ol className="list-decimal pl-5 space-y-1">
            {options.map((option, index) => (
              <li key={index} className="pl-1">
                {option}
              </li>
            ))}
          </ol>
        </div>

        {/* Answer table */}
        <div className="mt-4">
          <table className="border-collapse mx-auto">
            <tbody>
              <tr>
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <td key={letter} className="border border-gray-400 p-1 text-center w-8 text-sm">
                    {letter}
                  </td>
                ))}
              </tr>
              <tr>
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <td key={letter} className="border border-gray-400 p-1 h-8 w-8"></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BaseTask>
  )
}
