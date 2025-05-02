import { MultipleChoiceSection } from "@/components/multiple-choice-section"

export default function MultipleChoicePage() {
  const sectionData = {
    instructions:
      "Вы услышите интервью. В заданиях 3-9 запишите в поле ответа цифру 1, 2 или 3, соответствующую выбранному Вами варианту ответа. Вы услышите запись дважды.",
    questionRange: "3-9",
    questions: [
      {
        questionNumber: 3,
        questionText: "What do we learn about Lisa Black at the beginning of the interview?",
        options: [
          "She has two world-famous books",
          "She has an undergraduate degree in psychology",
          "All of her books are bestsellers",
        ],
      },
      {
        questionNumber: 4,
        questionText: "According to Lisa, what makes her crime novels different from others?",
        options: [
          "They are based on real criminal cases",
          "They include detailed scientific explanations",
          "They focus on the psychology of criminals",
        ],
      },
      {
        questionNumber: 5,
        questionText: "What does Lisa say about her writing process?",
        options: [
          "She plans every detail before starting",
          "She often changes the plot while writing",
          "She writes only when she feels inspired",
        ],
      },
      {
        questionNumber: 6,
        questionText: "What challenge does Lisa mention about writing crime fiction?",
        options: [
          "Finding new ways to surprise readers",
          "Keeping up with advances in forensic science",
          "Creating believable characters",
        ],
      },
      {
        questionNumber: 7,
        questionText: "What advice does Lisa give to aspiring writers?",
        options: [
          "Study the genre you want to write in",
          "Write every day, even if just for a short time",
          "Get feedback from professional editors",
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-[21cm] mx-auto p-6 bg-white">
        <h1 className="text-center font-bold mb-6">Multiple Choice Questions Example</h1>

        <div className="pl-10">
          <MultipleChoiceSection
            instructions={sectionData.instructions}
            questionRange={sectionData.questionRange}
            questions={sectionData.questions}
          />
        </div>
      </div>
    </main>
  )
}
