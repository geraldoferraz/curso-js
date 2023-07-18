const correctAnswers = ['D', 'B', 'C', 'A']

const form = document.querySelector('.quiz-form')
const resultado = document.querySelector('.result')


form.addEventListener('submit', event => {
    
    event.preventDefault()
    let score = 0 

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
     
    userAnswers.forEach((resposta, index) => {

        if(resposta === correctAnswers[index]){
            console.log('voce acertou')
            score += 25
            return
        } 
    })

    scrollTo(0, 0)
    resultado.querySelector('span').textContent = `${score}%`
    resultado.classList.remove('d-none')

    let counter = 0

    const timer = setInterval(() => {
        if(counter == score){
            clearInterval(timer)
        }
    resultado.querySelector('span').textContent = `${counter}%`
    counter++
        },10)
    })

