import { ListeningSection } from "./sections/listening-section"
import { ReadingSection } from "./sections/reading-section"
import { GrammarSection } from "./sections/grammar-section"
import { SpeakingSection } from "./sections/speaking-section"
import type { Exam as ExamType } from "@/types/exam"

interface ExamProps {
  data: ExamType
}

export function Exam({ data }: ExamProps) {
  const { title, sections } = data

  return (
    <div className="max-w-[21cm] mx-auto bg-white relative print:p-0">
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

        if (section.type === "grammar") {
          return <GrammarSection key={section.id} data={section} />
        }

        if (section.type === "speaking") {
          return <SpeakingSection key={section.id} data={section} />
        }

        return null
      })}
    </div>
  )
}
