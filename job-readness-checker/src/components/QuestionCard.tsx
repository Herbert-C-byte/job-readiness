import type { QuestionCardProps } from "../types/index"
import Button from "./Button";

export default function QuestionCard({question, options, onAnswer}: QuestionCardProps) {
  return(
    <>
      <div className="p-4 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-4">{question}</h2>
        <div className="flex gap-4">
          {options.map((option) => (
            <Button 
              key={option}
              onClick={() => onAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

            // <button
            //   key={option} 
            //   onClick={() => onAnswer(option)}
            //   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            // >
            //   {option}
            // </button>