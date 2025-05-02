import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface OptionListProps extends HTMLAttributes<HTMLOListElement> {
  options: string[]
  type?: "numeric" | "alphabetic"
  className?: string
}

export function OptionList({ options, type = "numeric", className, ...props }: OptionListProps) {
  return (
    <ol
      className={cn("pl-5 space-y-1 text-sm", type === "numeric" ? "list-decimal" : "list-[lower-alpha]", className)}
      {...props}
    >
      {options.map((option, index) => (
        <li key={index} className="pl-1">
          {option}
        </li>
      ))}
    </ol>
  )
}
