import { Section } from "./section"
import { SpeakingDescriptionTask } from "../tasks/speaking-description-task"
import type { SpeakingSection as SpeakingSectionType } from "@/types/exam"

interface SpeakingSectionProps {
  data: SpeakingSectionType
}

export function SpeakingSection({ data }: SpeakingSectionProps) {
  const { title, tasks } = data

  return (
    <Section title={title}>
      <div className="pl-0">
        {" "}
        {/* No left padding for speaking tasks */}
        {tasks.map((task) => {
          if (task.type === "speakingDescription") {
            return (
              <SpeakingDescriptionTask
                key={task.id}
                taskNumber={task.taskNumber}
                title={task.title}
                description={task.description}
                bulletPoints={task.bulletPoints}
                timeLimit={task.timeLimit}
                images={task.images}
              />
            )
          }
          return null
        })}
      </div>
    </Section>
  )
}
