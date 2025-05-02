import type { Exam } from "@/types/exam"

export const examData: Exam = {
  title: "Демонстрационный вариант ЕГЭ 2025 г.        АНГЛИЙСКИЙ ЯЗЫК, 11 класс.",
  pageNumber: "4 / 38",
  sections: [
    {
      id: "listening",
      type: "listening",
      title: "Раздел 1. Аудирование",
      tasks: [
        {
          id: "matching-1",
          type: "matching",
          taskNumber: 1,
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
        {
          id: "true-false-not-stated-1",
          type: "trueFalseNotStated",
          taskNumber: 2,
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
        {
          id: "multiple-choice-1",
          type: "multipleChoice",
          taskNumber: 3,
          instructions:
            "Вы услышите интервью. В заданиях 3-9 запишите в поле ответа цифру 1, 2 или 3, соответствующую выбранному Вами варианту ответа. Вы услышите запись дважды.",
          questions: [
            {
              id: "mc-q-1",
              taskNumber: 3,
              questionText: "What do we learn about Lisa Black at the beginning of the interview?",
              options: [
                "She has two world-famous books",
                "She has an undergraduate degree in psychology",
                "All of her books are bestsellers",
              ],
            },
            {
              id: "mc-q-2",
              taskNumber: 4,
              questionText: "According to Lisa, what makes her crime novels different from others?",
              options: [
                "They are based on real criminal cases",
                "They include detailed scientific explanations",
                "They focus on the psychology of criminals",
              ],
            },
            {
              id: "mc-q-3",
              taskNumber: 5,
              questionText: "What does Lisa say about her writing process?",
              options: [
                "She plans every detail before starting",
                "She often changes the plot while writing",
                "She writes only when she feels inspired",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "reading",
      type: "reading",
      title: "Раздел 2. Чтение",
      tasks: [
        {
          id: "text-completion-1",
          type: "textCompletion",
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
          gapLabels: ["A", "B", "C", "D", "E", "F"],
        },
      ],
    },
  ],
}
