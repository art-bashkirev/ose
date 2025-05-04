"use client"
import { TextWithGaps } from "@/components/ui/text-with-gaps"

interface GapChoice {
  id: number
  options: string[]
}

interface GapFillMultipleChoiceTaskProps {
  taskNumber: number
  text: string
  choices: GapChoice[]
}

export function GapFillMultipleChoiceTask({ taskNumber, text, choices }: GapFillMultipleChoiceTaskProps) {
  // Process the text to ensure gap markers are properly formatted for TextWithGaps
  const processedText = text.replace(/\[(\d+)\]/g, (_, num) => `**[${num}]**`)

  return (
    <div className="mb-6">
      <div className="border border-gray-400 mb-4">
        <div className="p-3">
          <TextWithGaps text={processedText} />
        </div>
      </div>

      {/* Grid-like layout for answers */}
      <div className="space-y-4">
        {choices.map((choice) => (
          <div key={choice.id} className="relative flex flex-col">
            {/* Question number in margin */}
            <div className="absolute -left-10 top-0 w-8 h-8 flex items-center justify-center border border-gray-400 bg-white text-base font-bold">
              {choice.id}
            </div>

            {/* Options in a row */}
            <div className="flex flex-1 space-x-6 mb-2">
              {choice.options.map((option, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-1">{index + 1})</span>
                  <span>{option}</span>
                </div>
              ))}
            </div>

            {/* Answer line */}
            <div className="flex items-center">
              <span className="mr-2">Ответ:</span>
              <div className="w-8 h-8 border border-gray-400"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
