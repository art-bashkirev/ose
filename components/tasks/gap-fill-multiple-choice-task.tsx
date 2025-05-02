"use client"

import { BaseTask } from "./base-task"
import { useMemo } from "react"

interface GapChoice {
  id: number
  options: string[]
}

interface GapFillMultipleChoiceTaskProps {
  taskNumber: number
  instructions: string
  text: string
  choices: GapChoice[]
  startingNumber: number
}

export function GapFillMultipleChoiceTask({
  taskNumber,
  instructions,
  text,
  choices,
  startingNumber = 30,
}: GapFillMultipleChoiceTaskProps) {
  // Parse the text to replace gap markers with styled gaps
  const formattedText = useMemo(() => {
    let processedText = text

    // Replace gap markers like [30] with styled spans
    choices.forEach((choice) => {
      const gapMarker = `[${choice.id}]`
      const gapElement = `<span class="inline-block w-6 h-6 align-middle text-center border border-gray-400 bg-gray-100 mx-1 font-bold">${choice.id}</span>`
      processedText = processedText.replace(gapMarker, gapElement)
    })

    return processedText
  }, [text, choices])

  return (
    <BaseTask taskNumber={taskNumber}>
      <div className="p-3">
        <div className="mb-4 border border-gray-300 p-2 bg-gray-50 text-sm">
          <p>{instructions}</p>
        </div>

        {/* Text with gaps */}
        <div className="mb-6 text-sm" dangerouslySetInnerHTML={{ __html: formattedText }} />

        {/* Answer choices */}
        <div className="space-y-4">
          {choices.map((choice) => (
            <div key={choice.id} className="border-t pt-2">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 border border-gray-400 text-center font-bold mr-2">{choice.id}</div>
                <div className="text-sm">Ответ:</div>
                <div className="w-8 h-8 border border-gray-400 ml-2"></div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {choice.options.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 text-center mr-1">{index + 1})</div>
                    <div className="text-sm">{option}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseTask>
  )
}
