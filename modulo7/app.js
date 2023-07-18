const correctAnswers = ['A', 'C', 'A', 'D']

const form = document.querySelector('form')
const alternativas = document.querySelector('.questao')


form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0 
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]
    userAnswers.forEach((resposta, index) => {

        if(resposta === correctAnswers[index]){
            console.log('Você acertou!')
            score += 25
            console.log(`pontuação atual: ${score}`)
        } else {
            console.log('Você errou!')
            score += 0 
            console.log(`pontuacao atual: ${score}`)

        }
        console.log(`pontuação final: ${score}`)
    })
})