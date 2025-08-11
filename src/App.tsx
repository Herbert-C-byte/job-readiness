import { useState } from "react";
import Layout from "./components/Layout";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Header from "./Header";
import questionaire from "./lib/questionaire";

function App() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  function handleAnswer(answer: string) {
    setAnswers([...answers, answer]);
    setQuestion(question + 1);
  }

  return (
    <>
      <Layout>
        <Header />
        <div className="flex flex-col md:flex-row justify-between items-center px-4 gap-4">
          <Hero />
          <main className="flex flex-grow px-4 py-6 max-w-4xl mx-auto w-full">
            {question < questionaire.length ? (
              <QuestionCard
                question={questionaire[question].question}
                options={questionaire[question].options}
                onAnswer={handleAnswer}
              />
            ) : (
              <Result answers={answers} />
            )}
          </main>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
