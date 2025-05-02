import { Section } from "./section"
import { TaskGroup } from "../task/task-group"
import { MatchingTask } from "../task/matching-task"
import { TrueFalseNotStatedTask } from "../task/true-false-not-stated-task"
import { MultipleChoiceTask } from "../task/multiple-choice-task"
import type { ListeningSectionData } from "@/types/exam"

interface ListeningSectionProps extends ListeningSectionData {}

export function ListeningSection({ matchingTask, trueFalseNotStatedTask, multipleChoiceTasks }: ListeningSectionProps) {
  return (
    <Section title="Раздел 1. Аудирование">
      {/* Matching Task */}
      <TaskGroup instructions={matchingTask.instructions}>
        <MatchingTask taskNumber={1} statements={matchingTask.statements} options={matchingTask.options} />
      </TaskGroup>

      {/* True/False/Not Stated Task */}
      <TaskGroup instructions={trueFalseNotStatedTask.instructions}>
        <TrueFalseNotStatedTask
          taskNumber={2}
          statements={trueFalseNotStatedTask.statements}
          options={trueFalseNotStatedTask.options}
        />
      </TaskGroup>

      {/* Multiple Choice Tasks */}
      <TaskGroup instructions={multipleChoiceTasks.instructions}>
        {multipleChoiceTasks.questions.map((question) => (
          <MultipleChoiceTask
            key={question.taskNumber} // This is for React's internal use, not a prop
            taskNumber={question.taskNumber}
            questionText={question.questionText}
            options={question.options}
          />
        ))}
      </TaskGroup>
    </Section>
  )
}
