import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./App.css";
import Header from "./Header";

function App() {
  const questionaire = [
    {
      question: "Você tem um currículo atualizado?",
      options: ["sim", "não"],
    },
    {
      question: "Você já participou de entrevistas de emprego?",
      options: ["sim", "não"],
    },
    {
      question: "Você tem uma conta no LinkedIn?",
      options: ["sim", "não"],
    },
    {
      question: "Você tem um portfólio online?",
      options: ["sim", "não"],
    },
    {
      question: "Você já trabalhou em projetos reais?",
      options: ["sim", "não"],
    },
    {
      question: "Você conhece os requisitos da vaga que deseja?",
      options: ["sim", "não"],
    },
    {
      question: "Você sabe como negociar salário?",
      options: ["sim", "não"],
    },
    {
      question: "Está preparado para responder perguntas técnicas?",
      options: ["sim", "não"],
    },
    {
      question: "Já pesquisou sobre as empresas que deseja?",
      options: ["sim", "não"],
    },
    {
      question: "Você sabe como escrever uma carta de apresentação?",
      options: ["sim", "não"],
    },
  ];

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
