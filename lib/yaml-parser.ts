import yaml from "js-yaml"
import type { Exam } from "@/types/exam"

export function parseYamlExam(yamlContent: string): Exam {
  try {
    const parsedData = yaml.load(yamlContent) as Exam
    return parsedData
  } catch (error) {
    console.error("Error parsing YAML:", error)
    throw new Error("Failed to parse exam YAML file")
  }
}

export function loadExamFromYaml(examId: string): Promise<Exam> {
  return fetch(`/exams/${examId}.yaml`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load exam: ${response.statusText}`)
      }
      return response.text()
    })
    .then((yamlContent) => parseYamlExam(yamlContent))
}
