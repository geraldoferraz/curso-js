const form = document.querySelector('form')
const user = document.querySelector('#username')
const button = document.querySelector('button')
const teste = /^[a-zA-Z]{6,}$/

const p = document.createElement('p')


user.addEventListener('input', event => {
    const valor = event.target.value
    console.log(valor)
    result = teste.test(valor)

    if(result){
        p.textContent = 'username valido'
        p.setAttribute('class', 'username-success-feedback')
        user.insertAdjacentElement('afterend', p)
        return
    }

    p.setAttribute('class', 'username-help-feedback')
    p.textContent = 'username invalido'
    user.insertAdjacentElement('afterend', p)
})


form.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = user.value

    if(!teste.test(inputValue)){
        p.textContent = 'por favor, insira um username valido'
        p.setAttribute('class', 'submit-help-feedback')
        button.insertAdjacentElement('afterend', p)
        return
    }

    p.textContent = 'Dados enviados'
    p.setAttribute('class', 'submit-success-feedback')
    button.insertAdjacentElement('afterend', p)

    user.value = ''

})
