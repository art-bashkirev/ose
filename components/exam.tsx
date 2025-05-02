import { ListeningSection } from "./sections/listening-section"
import { ReadingSection } from "./sections/reading-section"
import type { Exam as ExamType } from "@/types/exam"

interface ExamProps {
  data: ExamType
}

export function Exam({ data }: ExamProps) {
  const { title, sections } = data

  return (
    <div className="max-w-[21cm] mx-auto p-6 bg-white relative">
      {title && (
        <div className="text-center mb-6 text-sm">
          <h1>{title}</h1>
        </div>
      )}

      {sections.map((section) => {
        if (section.type === "listening") {
          return <ListeningSection key={section.id} data={section} />
        }

        if (section.type === "reading") {
          return <ReadingSection key={section.id} data={section} />
        }

        return null
      })}
    </div>
  )
}
