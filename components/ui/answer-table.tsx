import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface AnswerTableProps extends HTMLAttributes<HTMLTableElement> {
  headers: string[]
  rowLabel?: string
  className?: string
}

export function AnswerTable({ headers, rowLabel, className, ...props }: AnswerTableProps) {
  return (
    <table className={cn("border-collapse mx-auto", className)} {...props}>
      <tbody>
        <tr>
          {/* Row label as first cell */}
          <td className="border border-gray-400 p-1 bg-white text-sm">{rowLabel}</td>

          {/* Headers */}
          {headers.map((header, index) => (
            <td key={index} className="border border-gray-400 p-1 text-center w-8 text-sm">
              {header}
            </td>
          ))}
        </tr>
        <tr>
          {/* Answer label as first cell */}
          <td className="border border-gray-400 p-1 bg-white text-sm">Ответ</td>

          {/* Empty cells for answers */}
          {headers.map((_, index) => (
            <td key={index} className="border border-gray-400 p-1 h-8 w-8"></td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
