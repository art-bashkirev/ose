# Exam Component System

A modular system for creating and displaying exam papers using YAML files.

## Features

- Modular component system for different types of exam tasks
- YAML-based exam definition for easy creation and editing
- Support for various task types across different exam sections:
  - **Listening Section**:
    - Matching tasks
    - True/False/Not Stated tasks
    - Multiple Choice tasks
  - **Reading Section**:
    - Text Completion tasks
    - Headings Matching tasks
    - Reading Passage with Multiple Choice questions
    - Gap Fill Multiple Choice tasks
  - **Grammar Section**:
    - Grammar transformation tasks
    - Word Formation tasks
- Responsive design for viewing on different devices
- Print-friendly layout

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Task Types and Their YAML Structure

### Listening Section Tasks

#### Matching Task

\`\`\`yaml
- id: matching-1
  type: matching
  taskNumber: 1
  instructions: Instructions text
  statements:
    - Statement 1
    - Statement 2
    # ...
  options:
    - A
    - B
    # ...
\`\`\`

#### True/False/Not Stated Task

\`\`\`yaml
- id: true-false-1
  type: trueFalseNotStated
  taskNumber: 2
  instructions: Instructions text
  statements:
    - letter: A
      text: Statement A
    - letter: B
      text: Statement B
    # ...
  options:
    - A
    - B
    # ...
\`\`\`

#### Multiple Choice Task

\`\`\`yaml
- id: multiple-choice-1
  type: multipleChoice
  taskNumber: 3
  instructions: Instructions text
  questions:
    - id: question-1
      taskNumber: 3
      questionText: Question text
      options:
        - Option 1
        - Option 2
        - Option 3
    # More questions...
\`\`\`

### Reading Section Tasks

#### Text Completion Task

\`\`\`yaml
- id: text-completion-1
  type: textCompletion
  taskNumber: 4
  instructions: Instructions text
  text: |
    Text with **gaps** marked in **bold**.
  options:
    - Option 1
    - Option 2
    # ...
  gapLabels:
    - A
    - B
    # ...
\`\`\`

#### Headings Match Task

\`\`\`yaml
- id: headings-match-1
  type: headingsMatch
  taskNumber: 10
  instructions: Instructions text
  headings:
    - number: 1
      text: Heading 1
    - number: 2
      text: Heading 2
    # ...
  paragraphs:
    - letter: A
      text: Paragraph A text
    - letter: B
      text: Paragraph B text
    # ...
\`\`\`

#### Reading Passage Task

\`\`\`yaml
- id: reading-passage-1
  type: readingPassage
  taskNumber: 12
  title: Passage Title
  text: |
    Full text of the reading passage with multiple paragraphs.
\`\`\`

#### Reading Multiple Choice Task

\`\`\`yaml
- id: reading-multiple-choice-1
  type: readingMultipleChoice
  taskNumber: 12
  instructions: Instructions text
  questions:
    - id: 1
      questionText: Question text
      options:
        - Option 1
        - Option 2
        - Option 3
        - Option 4
    # More questions...
  startingNumber: 12
\`\`\`

#### Gap Fill Multiple Choice Task

\`\`\`yaml
- id: gap-fill-multiple-choice-1
  type: gapFillMultipleChoice
  taskNumber: 30
  instructions: Instructions text
  text: |
    Text with numbered gaps like [30], [31], etc.
  choices:
    - id: 30
      options:
        - Option 1
        - Option 2
        - Option 3
        - Option 4
    # More choices...
  startingNumber: 30
\`\`\`

### Grammar Section Tasks

#### Grammar Task

\`\`\`yaml
- id: grammar-task-1
  type: grammar
  taskNumber: 19
  instructions: Instructions text
  items:
    - id: 19
      sentence: "Sentence with a gap to be filled with the correct form of the word."
      originalWord: "WORD"
    - id: 20
      sentence: "Another sentence with a gap."
      originalWord: "ANOTHER"
    # More items...
\`\`\`

#### Word Formation Task

\`\`\`yaml
- id: word-formation-task-1
  type: wordFormation
  taskNumber: 25
  instructions: Instructions text
  items:
    - id: 25
      sentence: "Sentence with a gap to be filled with a word formed from the base word."
      baseWord: "BASE"
    - id: 26
      sentence: "Another sentence with a gap."
      baseWord: "FORM"
    # More items...
\`\`\`

## Complete Exam Structure

A complete exam YAML file has the following structure:

\`\`\`yaml
id: exam-id
title: Exam Title

sections:
  - id: section-id
    type: section-type  # listening, reading, or grammar
    title: Section Title
    tasks:
      # Tasks for this section
      - id: task-id
        type: task-type
        # Task-specific fields
\`\`\`

## Component Types

The system includes the following component types:

### UI Components

- `Box`: A basic container with optional borders
- `TaskNumber`: Displays the task number in a styled box
- `Instructions`: Displays task instructions
- `OptionList`: Displays a list of options with numeric or alphabetic markers
- `TextWithGaps`: Displays text with highlighted gaps
- `AnswerTable`: Displays a table for student answers

### Task Components

- `BaseTask`: Base component for all tasks
- `MatchingTask`: For matching statements with options
- `TrueFalseNotStatedTask`: For true/false/not stated tasks
- `MultipleChoiceTask`: For multiple choice questions
- `TextCompletionTask`: For text completion tasks
- `HeadingsMatchTask`: For matching headings with paragraphs
- `ReadingPassageTask`: For displaying reading passages
- `ReadingMultipleChoiceTask`: For multiple choice questions about a reading passage
- `GapFillMultipleChoiceTask`: For filling gaps with multiple choice options
- `GrammarTask`: For grammar transformation tasks
- `WordFormationTask`: For word formation tasks

### Section Components

- `Section`: Base component for all sections
- `ListeningSection`: For the listening section
- `ReadingSection`: For the reading section
- `GrammarSection`: For the grammar section

### Layout Components  For the reading section
- `GrammarSection`: For the grammar section

### Layout Components

- `Exam`: Main component that renders the entire exam
- `TaskGroup`: Groups related tasks with shared instructions

## Type Definitions

The system uses TypeScript interfaces to define the structure of exam data:

### Base Types

\`\`\`typescript
interface BaseTask {
  id: string
  type: string
  taskNumber: number
  instructions?: string
}

interface BaseSection {
  id: string
  type: string
  title: string
}
\`\`\`

### Section Types

\`\`\`typescript
interface ListeningSection extends BaseSection {
  type: "listening"
  tasks: Array<MatchingTask | TrueFalseNotStatedTask | MultipleChoiceTask>
}

interface ReadingSection extends BaseSection {
  type: "reading"
  tasks: Array<
    TextCompletionTask | 
    GapFillMultipleChoiceTask | 
    HeadingsMatchTask | 
    ReadingPassageTask | 
    ReadingMultipleChoiceTask
  >
}

interface GrammarSection extends BaseSection {
  type: "grammar"
  tasks: Array<GrammarTask | WordFormationTask>
}
\`\`\`

### Exam Type

\`\`\`typescript
interface Exam {
  id: string
  title: string
  sections: Array<ListeningSection | ReadingSection | GrammarSection>
}
\`\`\`

## Creating Custom Exams

To create a custom exam:

1. Create a new YAML file in the `public/exams` directory
2. Define the exam structure following the examples above
3. Access your exam at `/exams/your-exam-id`

## Styling

The system uses Tailwind CSS for styling. Key style classes include:

- Task numbers: Positioned in the left margin
- Instructions: Displayed in bordered boxes
- Answer tables: Consistent styling across all task types
- Print-friendly layout: Optimized for A4 paper size

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
