export interface MatchingTaskData {
  instructions: string
  statements: string[]
  options: string[]
}

export interface TrueFalseNotStatedTaskData {
  instructions: string
  statements: Array<{
    letter: string
    text: string
  }>
  options: string[]
}

export interface MultipleChoiceTasksData {
  instructions: string
  questions: Array<{
    taskNumber: number
    questionText: string
    options: string[]
  }>
}

export interface ListeningSectionData {
  matchingTask: MatchingTaskData
  trueFalseNotStatedTask: TrueFalseNotStatedTaskData
  multipleChoiceTasks: MultipleChoiceTasksData
}

export interface ExamData {
  title: string
  pageNumber: string
  listeningSection: ListeningSectionData
}
