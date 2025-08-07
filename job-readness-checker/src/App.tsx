import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./App.css";
import Header from "./Header";
import questionaire from "./lib/questionaire"

function App() {

  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  function handleAnswer(answer: string) {
    setAnswers([...answers, answer]);
    setQuestion(question + 1);
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow max-w-xl mx-auto mt-10 overflow-auto">
          {question < questionaire.length ? (
            <QuestionCard
              question={questionaire[question].question}
              options={questionaire[question].options}
              onAnswer={handleAnswer}
            />
          ) : (
            <Result answers={answers} />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
