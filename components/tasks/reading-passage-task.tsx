import { TextWithGaps } from "@/components/ui/text-with-gaps"
import { Instructions } from "@/components/ui/instructions"

interface ReadingPassageTaskProps {
  text: string
  instructions?: string
}

export function ReadingPassageTask({ text, instructions }: ReadingPassageTaskProps) {
  return (
    <div className="mb-6">
      {instructions && <Instructions className="mb-4">{instructions}</Instructions>}

      <div className="border border-gray-300">
        <div className="p-3">
          <TextWithGaps text={text} className="reading-passage" />
        </div>
      </div>
    </div>
  )
}
