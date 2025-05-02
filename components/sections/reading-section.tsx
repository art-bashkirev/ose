import { Section } from "./section"
import { TaskGroup } from "../tasks/task-group"
import { TextCompletionTask } from "../tasks/text-completion-task"
import type { ReadingSection as ReadingSectionType } from "@/types/exam"

interface ReadingSectionProps {
  data: ReadingSectionType
}

export function ReadingSection({ data }: ReadingSectionProps) {
  const { title, tasks } = data

  return (
    <Section title={title}>
      {tasks.map((task) => {
        if (task.type === "textCompletion") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <TextCompletionTask
                taskNumber={task.taskNumber}
                text={task.text}
                options={task.options}
                gapLabels={task.gapLabels}
              />
            </TaskGroup>
          )
        }

        return null
      })}
    </Section>
  )
}
