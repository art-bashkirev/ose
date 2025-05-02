import { ReadingSection } from "@/components/section/reading-section"
import type { ReadingSectionData } from "@/types/exam"

export default function ReadingPage() {
  const readingSectionData: ReadingSectionData = {
    textCompletionTask: {
      taskNumber: 11,
      instructions:
        "Прочитайте текст и заполните пропуски A–F частями предложений, обозначенными цифрами 1–7. Одна из частей в списке 1–7 лишняя. Занесите цифры, обозначающие соответствующие части предложений, в таблицу.",
      text: `## The Super Soaker story

Super Soakers are a familiar part of summer fun, but did you know the toy was invented by a scientist for a refrigerator? It's true! An accident sparked its creation, but its success took years of hard work.

Lonnie Johnson, **A** ______________, has always been interested in how things work. As a kid, he took his toys apart and put them back together, learning as he went.

In 1982, Johnson's day job was working on spacecraft in California. In the evenings, he worked on his own inventions. One of his projects was a refrigerator that cooled with water **C** ______________. One evening, he hooked up the idea to a bathroom sink so he could test it. It sprayed a strong stream of water across the sink! It made Johnson think.

He made the plastic parts for his water blaster in his basement, put it together, and asked his seven-year-old daughter to test it. As he watched her water fight with the other kids, he realized she was having a lot of fun.

Johnson wanted to make and sell the water blaster himself, **F** ______________. He didn't have that much extra money, so he decided to find a toy company as a partner. He tried and failed for the next 7 years. But then, the Super Soaker became one of the best-selling toys of all time and has brought a lot of fun to kids everywhere.`,
      options: [
        "before he got the idea for water squirt guns",
        "called the Power Blaster, came out in 1990 and ever since",
        "which led his friends to nickname it the Drencher",
        "but it would cost $200,000 to make 1,000 of them",
        "instead of the environmentally harmful freon then used",
        "the man behind the invention of the Super Soaker",
        "that's helped spread water blaster fun to other kids",
      ],
    },
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-[21cm] mx-auto p-6 bg-white">
        <h1 className="text-center font-bold mb-6">Reading Section Example</h1>

        <div className="pl-10">
          <ReadingSection textCompletionTask={readingSectionData.textCompletionTask} />
        </div>
      </div>
    </main>
  )
}
