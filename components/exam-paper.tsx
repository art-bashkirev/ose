import { ListeningSection } from "./section/listening-section"
import { ReadingSection } from "./section/reading-section"
import type { ExamData } from "@/types/exam"

interface ExamPaperProps extends ExamData {}

export function ExamPaper({ title, pageNumber, listeningSection, readingSection }: ExamPaperProps) {
  return (
    <div className="max-w-[21cm] mx-auto p-6 bg-white print:p-0 relative">
      <div className="flex justify-between mb-4 text-xs">
        <div>{title}</div>
        <div>{pageNumber}</div>
      </div>

      <ListeningSection
        matchingTask={listeningSection.matchingTask}
        trueFalseNotStatedTask={listeningSection.trueFalseNotStatedTask}
        multipleChoiceTasks={listeningSection.multipleChoiceTasks}
      />

      {readingSection && <ReadingSection textCompletionTask={readingSection.textCompletionTask} />}
    </div>
  )
}
