import type React from "react"

interface BaseTaskProps {
  taskNumber: number
  children?: React.ReactNode
}

export function BaseTask({ taskNumber, children }: BaseTaskProps) {
  return (
    <div className="relative mb-6">
      {/* Task number in margin */}
      <div className="absolute -left-10 top-0 w-8 h-8 flex items-center justify-center border border-gray-400 bg-white text-base font-bold">
        {taskNumber}
      </div>

      {/* Main content container */}
      <div className="border border-gray-400">{children}</div>
    </div>
  )
}
