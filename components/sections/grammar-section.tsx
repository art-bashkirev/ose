import { Section } from "./section"
import { TaskGroup } from "../tasks/task-group"
import { GrammarTask } from "../tasks/grammar-task"
import { WordFormationTask } from "../tasks/word-formation-task"
import { GapFillMultipleChoiceTask } from "../tasks/gap-fill-multiple-choice-task"
import type { GrammarSection as GrammarSectionType } from "@/types/exam"

interface GrammarSectionProps {
  data: GrammarSectionType
}

export function GrammarSection({ data }: GrammarSectionProps) {
  const { title, tasks } = data

  return (
    <Section title={title}>
      {tasks.map((task) => {
        if (task.type === "grammar") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <GrammarTask taskNumber={task.taskNumber} instructions={task.instructions} items={task.items} />
            </TaskGroup>
          )
        }

        if (task.type === "wordFormation") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <WordFormationTask
                taskNumber={task.taskNumber}
                instructions={task.instructions}
                items={task.items}
                title={task.title}
              />
            </TaskGroup>
          )
        }

        if (task.type === "gapFillMultipleChoice") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <GapFillMultipleChoiceTask taskNumber={task.taskNumber} text={task.text} choices={task.choices} />
            </TaskGroup>
          )
        }

        return null
      })}
    </Section>
  )
}
