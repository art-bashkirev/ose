import Link from "next/link"

const availableExams = [
  {
    id: "english-exam-2025",
    title: "English Exam 2025",
    description: "Demonstration version of the English Exam for 2025",
  },
  {
    id: "math-exam-2025",
    title: "Math Exam 2025",
    description: "Demonstration version of the Math Exam for 2025",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Exam Component System</h1>

        <p className="mb-6 text-gray-700">
          Welcome to the Exam Component System. This system allows teachers to easily create and view exam papers using
          YAML files. Select an exam from the list below to view it.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {availableExams.map((exam) => (
            <Link
              key={exam.id}
              href={`/exams/${exam.id}`}
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg font-semibold">{exam.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{exam.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-2">How to Create Your Own Exam</h2>
          <p className="text-gray-700 mb-2">
            To create your own exam, simply create a YAML file in the{" "}
            <code className="bg-gray-200 px-1 rounded">public/exams</code> directory following the format of the example
            exams.
          </p>
          <p className="text-gray-700">
            Once created, your exam will be accessible at{" "}
            <code className="bg-gray-200 px-1 rounded">/exams/your-exam-id</code>.
          </p>
        </div>
      </div>
    </main>
  )
}
