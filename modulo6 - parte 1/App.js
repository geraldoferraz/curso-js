const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const testUserName = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()
    const result = event.target.username.value
    const resultado = testUserName(result)
    console.log(resultado)

    if(resultado){
        feedback.textContent = 'senha valida'
    } else {
        feedback.textContent = 'senha invalida'
    }
})

form.username.addEventListener('keyup', event => {
    const username = testUserName(event.target.value)
    console.log(username)

    if(username){
        form.username.setAttribute('class', 'success')
        return
    }

    form.username.setAttribute('class', 'error')

})
