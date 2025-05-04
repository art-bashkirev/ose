import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"
import ReactMarkdown from "react-markdown"

interface InstructionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | string
}

export function Instructions({ children, className, ...props }: InstructionsProps) {
  // Don't render anything if children is empty
  if (!children || (typeof children === "string" && children.trim() === "")) {
    return null
  }

  return (
    <div className={cn("border border-gray-400", className)} {...props}>
      <div className="p-3 bg-white">
        {typeof children === "string" ? (
          <div className="instructions-text text-sm">
            <ReactMarkdown>{children}</ReactMarkdown>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
