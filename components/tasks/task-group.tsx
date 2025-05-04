import { Instructions } from "@/components/ui/instructions"
import type { ReactNode } from "react"

interface TaskGroupProps {
  instructions: string
  children: ReactNode
}

export function TaskGroup({ instructions, children }: TaskGroupProps) {
  return (
    <div className="mb-8">
      {instructions && <Instructions className="mb-4">{instructions}</Instructions>}
      <div>{children}</div>
    </div>
  )
}
