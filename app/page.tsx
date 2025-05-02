import { ExamPaper } from "@/components/exam-paper"
import { PdfExportButton } from "@/components/pdf-export-button"

export default function Home() {
  // Sample data based on the image
  const examData = {
    title: "Демонстрационный вариант ЕГЭ 2025 г.        АНГЛИЙСКИЙ ЯЗЫК, 11 класс.",
    subtitle: "Раздел 1. Аудирование",
    pageNumber: "4 / 38",
    task1: {
      instructions:
        "Вы услышите 6 высказываний. Установите соответствие между высказываниями каждого говорящего A–F и утверждениями, данными в списке 1–7. Используйте каждое утверждение, обозначенное соответствующей цифрой, только один раз. В задании есть одно лишнее утверждение. Вы услышите запись дважды. Занесите свои ответы в таблицу.",
      statements: [
        "Celebrating New Year has a long history.",
        "Good food is the most important thing for New Year.",
        "New Year is the best time for new beginnings.",
        "There are extravagant ways to celebrate New Year.",
        "It's important to be with your relatives.",
        "You don't need a special time to start something.",
        "Properly preparing before New Year is important.",
      ],
      options: ["A", "B", "C", "D", "E", "F"],
    },
    task2: {
      instructions:
        "Вы услышите диалог. Определите, какие из приведённых утверждений A–G соответствуют содержанию текста (1 – True), какие не соответствуют (2 – False) и о чём в тексте не сказано, то есть на основании текста нельзя дать ни положительного, ни отрицательного ответа (3 – Not stated). Занесите номер выбранного Вами варианта ответа в таблицу. Вы услышите запись дважды.",
      statements: [
        { letter: "A", text: "Julie has wanted to learn to draw for some time already." },
        { letter: "B", text: "Julie often works in summer." },
        { letter: "C", text: "Adam supports Julie's intention." },
        { letter: "D", text: "Julie thinks it's not necessary to learn the basics of drawing." },
        { letter: "E", text: "Adam dislikes abstract watercolour paintings." },
        { letter: "F", text: "Julie's sister goes to an art school." },
        { letter: "G", text: "Julie and Adam have been friends for a long time." },
      ],
      options: ["A", "B", "C", "D", "E", "F", "G"],
    },
    multipleChoiceSection: {
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
      ],
    },
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      <div id="exam-paper" className="a4-page">
        <ExamPaper {...examData} />
      </div>
      <PdfExportButton />
    </main>
  )
}
