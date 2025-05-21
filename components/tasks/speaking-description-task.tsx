import ReactMarkdown from "react-markdown"
import Image from "next/image"

interface SpeakingDescriptionTaskProps {
  taskNumber: number
  title: string
  description: string
  bulletPoints: string[]
  timeLimit: string
  images: Array<{
    src: string
    alt: string
  }>
}

export function SpeakingDescriptionTask({
  taskNumber,
  title,
  description,
  bulletPoints,
  timeLimit,
  images,
}: SpeakingDescriptionTaskProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start mb-4">
        {/* Task number in circle */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mr-4">
          {taskNumber}
        </div>

        {/* Task title and description */}
        <div>
          <h3 className="text-lg font-bold mb-2">
            Task {taskNumber}. {title}
          </h3>
          <p className="mb-4">{description}</p>

          {/* Bullet points */}
          <ul className="list-disc pl-5 mb-4 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index}>
                <div class="inline">
                <ReactMarkdown>{point}</ReactMarkdown>
                </div>
              </li>
            ))}
          </ul>

          {/* Time limit */}
          <p className="font-bold mb-4">{timeLimit}</p>
        </div>
      </div>

      {/* Images */}
      {images.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="border border-gray-300">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
