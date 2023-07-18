const paragraph = document.querySelector('p')
// console.log(paragraph)

//trocando o texto do paragrafo ou adicionando

// paragraph.innerText += 'novo paragrafo'

// const allDiv = document.querySelectorAll('p')

// allDiv.forEach((paragrafo, index) => {
//     paragrafo.innerText += ` novo texto ${index + 1}`
// })

const div = document.querySelector('.content')

// div.innerHTML = '<h3>conteudo aqui</h3>'


const people = ['gera', 'deco', 'font']

people.forEach(pessoa => {
    div.innerHTML += `<p>${pessoa}</p>`
})



