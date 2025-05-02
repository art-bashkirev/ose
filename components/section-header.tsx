import ReactMarkdown from "react-markdown"

interface SectionHeaderProps {
  instructions: string
  questionRange: string
}

export function SectionHeader({ instructions, questionRange }: SectionHeaderProps) {
  return (
    <div className="border border-gray-400 mb-6">
      <div className="p-3 bg-white">
        <ReactMarkdown className="task-instructions text-sm">{instructions}</ReactMarkdown>
      </div>
    </div>
  )
}
