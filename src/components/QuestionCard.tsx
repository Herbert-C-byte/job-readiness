import type { QuestionCardProps } from "../types/index";
import Button from "./Button";
import Card from "./Card";

export default function QuestionCard({
  question,
  options,
  onAnswer,
}: QuestionCardProps) {
  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-4">
        {options.map((option) => (
          <Button key={option} onClick={() => onAnswer(option)}>
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
}
