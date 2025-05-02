import type React from "react"
import ReactMarkdown from "react-markdown"

interface TaskBoxProps {
  taskNumber: number
  instructions: string
  children?: React.ReactNode
}

export function TaskBox({ taskNumber, instructions, children }: TaskBoxProps) {
  return (
    <div className="relative mb-8">
      {/* Task number in margin */}
      <div className="absolute -left-10 top-0 w-8 h-8 flex items-center justify-center border border-gray-400 bg-white text-base font-bold">
        {taskNumber}
      </div>

      {/* Main content container */}
      <div className="border border-gray-400">
        {/* Instructions box */}
        <div className="p-3 bg-white border-b border-gray-400">
          <ReactMarkdown className="task-instructions text-sm">{instructions}</ReactMarkdown>
        </div>

        {/* Content below the instruction box */}
        <div className="p-3">{children}</div>
      </div>
    </div>
  )
}
