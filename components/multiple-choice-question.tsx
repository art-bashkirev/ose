interface MultipleChoiceQuestionProps {
  questionNumber: number
  questionText: string
  options: string[]
}

export function MultipleChoiceQuestion({ questionNumber, questionText, options }: MultipleChoiceQuestionProps) {
  return (
    <div className="relative mb-6">
      {/* Question number in margin */}
      <div className="absolute -left-10 top-0 w-8 h-8 flex items-center justify-center border border-gray-400 bg-white text-base font-bold">
        {questionNumber}
      </div>

      {/* Question content */}
      <div className="border border-gray-400">
        <div className="p-3">
          <p className="text-sm font-medium mb-3">{questionText}</p>

          <div className="space-y-1 text-sm">
            {options.map((option, index) => (
              <div key={index} className="flex">
                <div className="w-5">{index + 1})</div>
                <div>{option}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center">
            <div className="text-sm mr-2">Ответ:</div>
            <div className="w-8 h-8 border border-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
