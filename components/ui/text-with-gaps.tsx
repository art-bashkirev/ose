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
      <div className="text-with-gaps">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mb-3">{children}</p>,
            h1: ({ children }) => <h1 className="text-xl font-bold mb-3 text-center">{children}</h1>,
            h2: ({ children }) => <h2 className="text-lg font-bold mb-2 text-center">{children}</h2>,
            h4: ({ children }) => <p className="text-sm italic text-gray-600 mb-4 text-center">{children}</p>,
            strong: ({ children }) => {
              // Check if the content is a gap marker like [30]
              const content = String(children)
              const isGapMarker = /^\[\d+\]$/.test(content)

              if (isGapMarker) {
                // Extract the number from [30]
                const number = content.match(/\[(\d+)\]/)?.[1]
                return (
                  <span className="inline-block align-middle px-1 py-0.5 bg-gray-200 border-b border-gray-400">
                    {number && <span className="text-xs align-text-top">[{number}]</span>}
                    <span className="mx-4">_______</span>
                  </span>
                )
              }

              return <strong className="px-1 py-0.5 bg-gray-200">{children}</strong>
            },
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  )
}
