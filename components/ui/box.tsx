import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: "default" | "bordered" | "filled"
}

export function Box({ children, className, variant = "default", ...props }: BoxProps) {
  return (
    <div
      className={cn(
        "p-1", // Changed from "p-4" to "p-2" to reduce padding
        variant === "bordered" && "border border-gray-300",
        variant === "filled" && "bg-gray-50 border border-gray-300",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
