const form = document.querySelector('form')
const input = document.querySelector('#input')
const doc = document.querySelector('a')

const teste = 'B99'

const regex = /^.{3,}$/
const result = regex.test(teste)

form.addEventListener('submit', event => {
    event.preventDefault()
    const pattern = /^[a-zA-Z0-9]{7,11}$/
    const resultado = pattern.test(event.target.input.value)
    
    if(resultado){
        console.log('o valor inserido no input é valido')
        input.focus()
    }else{
        console.log('o valor inserido no input é invalido')
        input.value = ''
        input.focus()
        }
    })

