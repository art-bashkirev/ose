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
    <div className={cn("text-sm", className)} {...props}>
      {typeof children === "string" ? (
        <ReactMarkdown className="instructions-text">{children}</ReactMarkdown>
      ) : (
        children
      )}
    </div>
  )
}
