import { TaskNumber } from "@/components/ui/task-number"
import { Box } from "@/components/ui/box"
import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface BaseTaskProps extends HTMLAttributes<HTMLDivElement> {
  taskNumber: number
  children: ReactNode
  className?: string
}

export function BaseTask({ taskNumber, children, className, ...props }: BaseTaskProps) {
  return (
    <div className={cn("relative mb-6", className)} {...props}>
      <TaskNumber>{taskNumber}</TaskNumber>
      <Box variant="bordered">{children}</Box>
    </div>
  )
}
