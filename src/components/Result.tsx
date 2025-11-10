import type { ResultProps } from "../types/index";
import Card from "./Card";
import questionaire from "../lib/questionaire"

export default function Result({ answers }: ResultProps) {
  const score = answers.filter((answer) => answer === "sim").length;

  let feedback: string;
  if (score <= 2) {
    feedback = "O seu perfil profissional ainda precisa de muito desenvolvimento, a sério.";
  } else if (score <= 4) {
    feedback =
      "Você está no caminho, mas ainda precisa fortalecer seus conhecimentos antes de se considerar pronto para uma vaga.";
  } else if (score <= 6) {
    feedback =
      "Bom progresso. Continue revisando e praticando para consolidar seus aprendizados.";
  } else if (score <= 8) {
    feedback =
      "Muito bem! Sua preparação está quase completa. Pequenos ajustes e você estará pronto.";
  } else {
    feedback =
      "Excelente! Você demonstrou domínio nos pontos avaliados. Está pronto para avançar.";
  }

  return (
    <>
      <div className="p-6 max-w-2xl mx-auto">
        <Card className="text-center">
          <h2 className="text-2xl font-bold mb-4">O seu Resultado</h2>
          <h3 >Respostas selecionadas pelo usuário:</h3>
          <ul>
            {answers.map((answer, index) => (
              <li key={index}>
                <strong>{questionaire[index].question}</strong> : {answer}
              </li>
            ))}
          </ul>
          <p className="text-lg my-2">
            Pontuação: {score} de {answers.length}
          </p>
          <p className="text-md text-gray-700">{feedback}</p>
          {score === 10 && (
            <div>
              <h2>
                Aproveite e visite a <a href="https://app.mirantes.io/" className="text-blue-700">Mirantes.io</a>
              </h2>
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
