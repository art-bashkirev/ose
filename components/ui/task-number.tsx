import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface TaskNumberProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function TaskNumber({ children, className, ...props }: TaskNumberProps) {
  return (
    <div
      className={cn(
        "absolute -left-10 top-0 w-8 h-8 flex items-center justify-center border border-gray-400 bg-white font-bold",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
