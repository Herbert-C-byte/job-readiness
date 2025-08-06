type ResultProps = {
    answers: string[]
}

export default function Result({ answers }: ResultProps ) {
    const score = answers.filter((answer) => answer === "sim").length
    
    let feedback: string = ""
    if (score <= 3) {
        feedback = "Assim não vai dar boss😂"
    } else if (score <= 6) {
        feedback = "Estuda mais um pouco, bumbar ainda não é pra ti"
    } else {
        feedback = "Yeah, até que já estás ok"
    }


    return(
        <>
            <div className="p-4 text-center">
                <h2 className="text-2xl font-bold mb-4">O seu Resultado</h2>
                <p className="text-lg mb-2">Pontuação: {score} de {answers.length}</p>
                <p className="text-md ">{feedback}</p>
            </div>
        </>
    )
}