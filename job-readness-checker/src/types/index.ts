type QuestionCardProps = {
  question: string,
  options: string[],
  onAnswer: (answer: string) => void
}

type ResultProps = {
    answers: string[]
}

export type { QuestionCardProps, ResultProps }