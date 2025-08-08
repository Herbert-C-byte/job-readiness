type QuestionCardProps = {
  question: string,
  options: string[],
  onAnswer: (answer: string) => void
}

type ResultProps = {
    answers: string[]
}

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "reset" | "submit";
}

export type { QuestionCardProps, ResultProps, ButtonProps }