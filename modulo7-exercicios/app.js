setTimeout(() => {
    console.log('um segundo e meio se passaram')
}, 1500) 

const counter = document.querySelector('.counter-container')
const buttonInicial = document.querySelector('.button-init-counter')
const buttonStop = document.querySelector('.button-stop-counter')

let cont = 0 
let timer = null

buttonInicial.addEventListener('click', () => {
    timer = setInterval(() => {
        counter.textContent = cont + 1
        cont++
    }, 1000)
})

buttonStop.addEventListener('click', () => {

    clearInterval(timer)

    if(cont > 0){
        counter.textContent = 0
        cont = 0
    }
})