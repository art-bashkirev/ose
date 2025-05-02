import { Section } from "./section"
import { TaskGroup } from "../tasks/task-group"
import { MatchingTask } from "../tasks/matching-task"
import { TrueFalseNotStatedTask } from "../tasks/true-false-not-stated-task"
import { MultipleChoiceTask } from "../tasks/multiple-choice-task"
import type { ListeningSection as ListeningSectionType } from "@/types/exam"

interface ListeningSectionProps {
  data: ListeningSectionType
}

export function ListeningSection({ data }: ListeningSectionProps) {
  const { title, tasks } = data

  return (
    <Section title={title}>
      {tasks.map((task) => {
        if (task.type === "matching") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <MatchingTask taskNumber={task.taskNumber} statements={task.statements} options={task.options} />
            </TaskGroup>
          )
        }

        if (task.type === "trueFalseNotStated") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              <TrueFalseNotStatedTask
                taskNumber={task.taskNumber}
                statements={task.statements}
                options={task.options}
              />
            </TaskGroup>
          )
        }

        if (task.type === "multipleChoice") {
          return (
            <TaskGroup key={task.id} instructions={task.instructions}>
              {task.questions.map((question) => (
                <MultipleChoiceTask
                  key={question.id}
                  taskNumber={question.taskNumber}
                  questionText={question.questionText}
                  options={question.options}
                />
              ))}
            </TaskGroup>
          )
        }

        return null
      })}
    </Section>
  )
}
