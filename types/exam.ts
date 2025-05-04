// Base types
export interface BaseTask {
  id: string
  type: string
  taskNumber: number
  instructions?: string
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
  title?: string
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
}

// Headings Match task
export interface HeadingsMatchTask extends BaseTask {
  type: "headingsMatch"
  headings: Array<{
    number: number
    text: string
  }>
  paragraphs: Array<{
    letter: string
    text: string
  }>
}

// Reading Passage task
export interface ReadingPassageTask extends Omit<BaseTask, "taskNumber"> {
  type: "readingPassage"
  text: string
  instructions?: string
}

// Reading Multiple Choice task
export interface ReadingMultipleChoiceQuestion {
  id: number
  questionText: string
  options: string[]
}

// Remove the startingNumber from ReadingMultipleChoiceTask if it's not needed
export interface ReadingMultipleChoiceTask extends BaseTask {
  type: "readingMultipleChoice"
  questions: ReadingMultipleChoiceQuestion[]
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
  tasks: Array<TextCompletionTask | HeadingsMatchTask | ReadingPassageTask | ReadingMultipleChoiceTask>
}

export interface GrammarSection extends BaseSection {
  type: "grammar"
  tasks: Array<GrammarTask | WordFormationTask | GapFillMultipleChoiceTask>
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
