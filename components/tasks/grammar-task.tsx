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
    <div className="mb-6">
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

            {/* Original word on the right */}
            <div className="w-24 text-right font-bold uppercase">{item.originalWord}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
