import { Section } from "./section"
import { TaskGroup } from "../tasks/task-group"
import { TextCompletionTask } from "../tasks/text-completion-task"
import { HeadingsMatchTask } from "../tasks/headings-match-task"
import { GapFillMultipleChoiceTask } from "../tasks/gap-fill-multiple-choice-task"
import { ReadingPassageTask } from "../tasks/reading-passage-task"
import { ReadingMultipleChoiceTask } from "../tasks/reading-multiple-choice-task"
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

        if (task.type === "headingsMatch") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <HeadingsMatchTask
                taskNumber={task.taskNumber}
                instructions={task.instructions}
                headings={task.headings}
                paragraphs={task.paragraphs}
              />
            </TaskGroup>
          )
        }

        if (task.type === "gapFillMultipleChoice") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <GapFillMultipleChoiceTask
                taskNumber={task.taskNumber}
                instructions={task.instructions}
                text={task.text}
                choices={task.choices}
                startingNumber={task.startingNumber}
              />
            </TaskGroup>
          )
        }

        if (task.type === "readingPassage") {
          return (
            <div key={task.id}>
              <ReadingPassageTask text={task.text} instructions={task.instructions} />
            </div>
          )
        }

        if (task.type === "readingMultipleChoice") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <ReadingMultipleChoiceTask
                taskNumber={task.taskNumber}
                questions={task.questions}
                startingNumber={task.startingNumber}
              />
            </TaskGroup>
          )
        }

        return null
      })}
    </Section>
  )
}
