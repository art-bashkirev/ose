import { BaseTask } from "./base-task"

interface WordFormationItem {
  id: number
  sentence: string
  baseWord: string
}

interface WordFormationTaskProps {
  taskNumber: number
  instructions: string
  items: WordFormationItem[]
}

export function WordFormationTask({ taskNumber, instructions, items }: WordFormationTaskProps) {
  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        <div className="mb-4 border border-gray-300 p-2 bg-gray-50 text-sm">
          <p>{instructions}</p>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-start">
              <div className="w-6 text-center font-bold mr-2">{item.id}</div>
              <div className="flex-grow">
                <p className="text-sm">{item.sentence}</p>
              </div>
              <div className="w-24 text-right font-bold uppercase">{item.baseWord}</div>
            </div>
          ))}
        </div>
      </div>
    </BaseTask>
  )
}
