"use client"

import { useEffect, useState } from "react"
import { Exam } from "@/components/exam"
import { loadExamFromYaml } from "@/lib/yaml-parser"
import type { Exam as ExamType } from "@/types/exam"

export default function ExamPage({ params }: { params: { examId: string } }) {
  const [examData, setExamData] = useState<ExamType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadExam() {
      try {
        const data = await loadExamFromYaml(params.examId)
        setExamData(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load exam. Please check the exam ID and try again.")
        setLoading(false)
      }
    }

    loadExam()
  }, [params.examId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl">Loading exam...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-red-500">{error}</div>
        </div>
      </div>
    )
  }

  if (!examData) {
    return null
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div id="exam-paper" className="a4-page">
        <Exam data={examData} />
      </div>
    </main>
  )
}
