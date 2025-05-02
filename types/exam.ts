// Base types
export interface BaseTask {
  id: string
  type: string
  taskNumber: number
  instructions: string
}

// Matching task
export interface MatchingTask extends BaseTask {
  type: "matching"
  statements: string[]
  options: string[]
}

// True/False/Not Stated task
export interface TrueFalseNotStatedTask extends BaseTask {
  type: "trueFalseNotStated"
  statements: Array<{
    letter: string
    text: string
  }>
  options: string[]
}

// Multiple Choice task
export interface MultipleChoiceQuestion {
  id: string
  taskNumber: number
  questionText: string
  options: string[]
}

export interface MultipleChoiceTask extends BaseTask {
  type: "multipleChoice"
  questions: MultipleChoiceQuestion[]
}

// Text Completion task
export interface TextCompletionTask extends BaseTask {
  type: "textCompletion"
  text: string
  options: string[]
  gapLabels: string[]
}

// Grammar task
export interface GrammarItem {
  id: number
  sentence: string
  originalWord: string
}

export interface GrammarTask extends BaseTask {
  type: "grammar"
  items: GrammarItem[]
}

// Word Formation task
export interface WordFormationItem {
  id: number
  sentence: string
  baseWord: string
}

export interface WordFormationTask extends BaseTask {
  type: "wordFormation"
  items: WordFormationItem[]
}

// Gap Fill Multiple Choice task
export interface GapChoice {
  id: number
  options: string[]
}

export interface GapFillMultipleChoiceTask extends BaseTask {
  type: "gapFillMultipleChoice"
  text: string
  choices: GapChoice[]
  startingNumber: number
}

// Section types
export interface BaseSection {
  id: string
  type: string
  title: string
}

export interface ListeningSection extends BaseSection {
  type: "listening"
  tasks: Array<MatchingTask | TrueFalseNotStatedTask | MultipleChoiceTask>
}

export interface ReadingSection extends BaseSection {
  type: "reading"
  tasks: Array<TextCompletionTask | GapFillMultipleChoiceTask>
}

export interface GrammarSection extends BaseSection {
  type: "grammar"
  tasks: Array<GrammarTask | WordFormationTask>
}

// Exam type
export interface Exam {
  id: string
  title: string
  sections: Array<ListeningSection | ReadingSection | GrammarSection>
}

export type ExamData = Exam
export type ReadingSectionData = ReadingSection
export type ListeningSectionData = ListeningSection
export type GrammarSectionData = GrammarSection
