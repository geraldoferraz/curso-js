// const upperCase = document.querySelector('h1')

// console.log(upperCase.innerText.toUpperCase())

// const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]

// const num = document.querySelector('.numbers')

// numbers.forEach(numero => {
//     num.innerHTML += `<li class='number'>${numero}</li>`
// })

// const lis = document.querySelectorAll('.number')

// lis.forEach(li => {
//     if(li.innerHTML % 2 == 0){
//         li.style.color = 'lightblue'
//     } else {
//         li.style.color = 'pink'
//     }
// })

const corpo = document.querySelector('body')

corpo.classList.add('body-background')

const href = document.querySelector('.link')

href.setAttribute('href', 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo')

console.log(href.getAttribute('href'))

corpo.classList.remove('body-background')


href.classList.toggle('link')
