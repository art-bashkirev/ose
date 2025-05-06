"use client"

import { useEffect, useState } from "react"
import { Exam } from "@/components/exam"
import { loadExamFromYaml } from "@/lib/yaml-parser"
import type { Exam as ExamType } from "@/types/exam"
import { useParams } from "next/navigation"

export default function ExamPage() {
  const params = useParams()
  const examId = params.examId as string

  const [examData, setExamData] = useState<ExamType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadExam() {
      try {
        const data = await loadExamFromYaml(examId)
        setExamData(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load exam. Please check the exam ID and try again.")
        setLoading(false)
      }
    }

    loadExam()
  }, [examId])

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
    <main className="page">
      <div id="exam-paper" className="min-h-screen bg-gray-100">
        <Exam data={examData} />
      </div>
    </main>
  )
}
