import type React from "react"
import ReactMarkdown from "react-markdown"

interface TaskGroupProps {
  instructions: string
  children?: React.ReactNode
}

export function TaskGroup({ instructions, children }: TaskGroupProps) {
  return (
    <div className="mb-8">
      {/* Instructions box */}
      <div className="border border-gray-400 mb-4">
        <div className="p-3 bg-white">
          <ReactMarkdown className="task-instructions text-sm">{instructions}</ReactMarkdown>
        </div>
      </div>

      {/* Tasks */}
      <div>{children}</div>
    </div>
  )
}
