import { BaseTask } from "./base-task"
import { TextWithGaps } from "@/components/ui/text-with-gaps"
import { OptionList } from "@/components/ui/option-list"
import { AnswerTable } from "@/components/ui/answer-table"

interface TextCompletionTaskProps {
  taskNumber: number
  text: string
  options: string[]
  gapLabels: string[]
}

export function TextCompletionTask({ taskNumber, text, options, gapLabels }: TextCompletionTaskProps) {
  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        <TextWithGaps text={text} className="mb-4" />
        <OptionList options={options} className="mb-4" />
        <AnswerTable headers={gapLabels} className="mt-4" />
      </div>
    </BaseTask>
  )
}
