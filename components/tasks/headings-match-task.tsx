import { BaseTask } from "./base-task"
import { AnswerTable } from "@/components/ui/answer-table"

interface HeadingsMatchTaskProps {
  taskNumber: number
  instructions: string
  headings: Array<{
    number: number
    text: string
  }>
  paragraphs: Array<{
    letter: string
    text: string
  }>
}

export function HeadingsMatchTask({ taskNumber, instructions, headings, paragraphs }: HeadingsMatchTaskProps) {
  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        {/* Headings list */}
        <div className="mb-4 border border-gray-300 p-2 bg-gray-50">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {headings.map((heading) => (
              <div key={heading.number} className="flex">
                <div className="w-5 font-bold">{heading.number}.</div>
                <div>{heading.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-4 text-sm mb-4">
          {paragraphs.map((paragraph) => (
            <div key={paragraph.letter} className="mb-3">
              <div className="font-bold mb-1">{paragraph.letter}.</div>
              <div>{paragraph.text}</div>
            </div>
          ))}
        </div>

        {/* Answer table */}
        <AnswerTable headers={paragraphs.map((p) => p.letter)} rowLabel="Заголовок" className="mt-4" />
      </div>
    </BaseTask>
  )
}
