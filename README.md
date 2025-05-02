# Exam Component System

A modular system for creating and displaying exam papers using YAML files.

## Features

- Modular component system for different types of exam tasks
- YAML-based exam definition for easy creation and editing
- Support for various task types:
  - Matching tasks
  - True/False/Not Stated tasks
  - Multiple Choice tasks
  - Text Completion tasks
- Responsive design for viewing on different devices
- Print-friendly layout

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Creating a New Exam

To create a new exam, add a YAML file to the `public/exams` directory. The file should follow this structure:

\`\`\`yaml
id: your-exam-id
title: Your Exam Title

sections:
  - id: section-id
    type: section-type  # listening or reading
    title: Section Title
    tasks:
      - id: task-id
        type: task-type  # matching, trueFalseNotStated, multipleChoice, or textCompletion
        taskNumber: 1
        instructions: Task instructions go here
        # Additional fields depending on task type
\`\`\`

### Task Types and Their Fields

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

## Accessing Your Exam

Once you've created your YAML file, your exam will be available at:

\`\`\`
http://localhost:3000/exams/your-exam-id
\`\`\`

Where `your-exam-id` is the `id` field from your YAML file.
\`\`\`

Let's update the package.json to include the necessary dependencies:
