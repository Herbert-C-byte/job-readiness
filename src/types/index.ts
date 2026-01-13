type CardProps = {
  className?: string;
}

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

type ProgressIndicatorProps = {
  current: number;
  total: number;
}


export type { CardProps, QuestionCardProps, ResultProps, ButtonProps, ProgressIndicatorProps }