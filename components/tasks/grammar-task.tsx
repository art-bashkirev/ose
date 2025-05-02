import { BaseTask } from "./base-task"

interface GrammarItem {
  id: number
  sentence: string
  originalWord: string
}

interface GrammarTaskProps {
  taskNumber: number
  instructions: string
  items: GrammarItem[]
}

export function GrammarTask({ taskNumber, instructions, items }: GrammarTaskProps) {
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
              <div className="w-24 text-right font-bold uppercase">{item.originalWord}</div>
            </div>
          ))}
        </div>
      </div>
    </BaseTask>
  )
}
