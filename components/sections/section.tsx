import type { ReactNode } from "react"

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-center font-bold mb-6 text-sm">{title}</h2>
      <div className="pl-10">{children}</div>
    </div>
  )
}
