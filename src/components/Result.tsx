import type { ResultProps } from "../types/index";
import Card from "./Card";
import questionaire from "../lib/questionaire";

const getFeedback = (score: number): string => {
  if (score <= 2) {
    return "O seu perfil profissional ainda precisa de muito desenvolvimento, a sério.";
  }
  if (score <= 4) {
    return "Você está no caminho, mas ainda precisa fortalecer seus conhecimentos antes de se considerar pronto para uma vaga.";
  }
  if (score <= 6) {
    return "Bom progresso. Continue revisando e praticando para consolidar seus aprendizados.";
  }
  if (score <= 8) {
    return "Muito bem! Sua preparação está quase completa. Pequenos ajustes e você estará pronto.";
  }
  return "Excelente! Você demonstrou domínio nos pontos avaliados. Está pronto para avançar.";
};

export default function Result({ answers }: ResultProps) {
  const score = answers.filter((answer) => answer === "sim").length;
  const feedback = getFeedback(score);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card className="text-center">
        <h2 className="text-2xl font-bold mb-4">O seu Resultado</h2>
        <h3 className="font-semibold mb-4">
          Respostas selecionadas pelo usuário:
        </h3>
        <ul className="text-left mb-6">
          {answers.map((answer, index) => (
            <li key={index} className="mb-2">
              <strong>{questionaire[index].question}</strong>: {answer}
            </li>
          ))}
        </ul>
        <p className="text-lg my-2 font-semibold">
          Pontuação: {score} de {answers.length}
        </p>
        <p className="text-md text-gray-700 mb-6">{feedback}</p>
        {score === 10 && (
          <div>
            <p>
              Aproveite e visite a{" "}
              <a
                href="https://app.mirantes.io/"
                className="text-blue-700 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mirantes.io
              </a>
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
