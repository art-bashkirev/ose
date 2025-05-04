interface WordFormationItem {
  id: number
  sentence: string
  baseWord: string
}

interface WordFormationTaskProps {
  taskNumber: number
  instructions: string
  items: WordFormationItem[]
  title?: string
}

export function WordFormationTask({ taskNumber, instructions, items, title }: WordFormationTaskProps) {
  return (
    <div className="mb-6">
      {/* Optional title */}
      {title && <h3 className="text-center font-bold mb-4 text-sm">{title}</h3>}

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="relative flex">
            {/* Task number in margin */}
            <div className="absolute -left-10 top-0 w-8 h-8 flex items-center justify-center border border-gray-400 bg-white text-base font-bold">
              {item.id}
            </div>

            {/* Sentence with gap */}
            <div className="flex-grow pr-4">
              <p className="text-sm">{item.sentence}</p>
            </div>

            {/* Base word on the right */}
            <div className="w-24 text-right font-bold uppercase">{item.baseWord}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
