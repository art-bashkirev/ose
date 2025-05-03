import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"
import ReactMarkdown from "react-markdown"

interface TextWithGapsProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  className?: string
}

export function TextWithGaps({ text, className, ...props }: TextWithGapsProps) {
  return (
    <div className={cn("text-sm", className)} {...props}>
      <ReactMarkdown
        className="text-with-gaps"
        components={{
          p: ({ children }) => <p className="mb-3">{children}</p>,
          h1: ({ children }) => <h1 className="text-xl font-bold mb-3 text-center">{children}</h1>,
          h2: ({ children }) => <h2 className="text-lg font-bold mb-2 text-center">{children}</h2>,
          strong: ({ children }) => <strong className="px-1 py-0.5 bg-gray-200">{children}</strong>,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  )
}
