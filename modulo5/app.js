// // query selector 

// const paragraph = document.querySelector('p')

// console.log(paragraph)

// const error = document.querySelector('.error')

// console.log(error)

// const Error = document.querySelector('div.error')

// console.log(Error)

const another = document.querySelectorAll('p')
console.log(another)

another.forEach(paragraph => {
    console.log(paragraph)
})

const allErrors = document.querySelectorAll('.error')

allErrors.forEach(erro => {
    console.log(erro)
})