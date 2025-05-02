import { Section } from "./section"
import { TaskGroup } from "../task/task-group"
import { TextCompletionTask } from "../task/text-completion-task"
import type { ReadingSectionData } from "@/types/exam"

interface ReadingSectionProps extends ReadingSectionData {}

export function ReadingSection({ textCompletionTask }: ReadingSectionProps) {
  return (
    <Section title="Раздел 2. Чтение">
      {/* Text Completion Task */}
      <TaskGroup instructions={textCompletionTask.instructions}>
        <TextCompletionTask
          taskNumber={textCompletionTask.taskNumber}
          text={textCompletionTask.text}
          options={textCompletionTask.options}
        />
      </TaskGroup>
    </Section>
  )
}
