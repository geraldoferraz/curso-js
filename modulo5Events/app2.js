const div = document.querySelector('div')
const elementsInsideDiv = Array.from(div.children)
const h2 = document.querySelector('h2')
const egg = document.querySelector('.egg')
const button = document.querySelector('button')

elementsInsideDiv.forEach(element => {
  element.addEventListener('click', event => {
    event.stopPropagation()
    // console.log(`Clicou no ${event.target.tagName.toLowerCase()}, filho da div.`)
    h2.innerText += `\n clicou no filho da div`
  })
})

div.addEventListener('click', () => {
    h2.innerText += `\n clicou na div`
})

h2.addEventListener('copy', () => {
    console.log('texto copiado!')
})

egg.addEventListener('mousemove', event => {
    // console.log(`eixo X : ${event.offsetX} , eixo Y :${event.offsetY}`)
})

button.addEventListener('click', () => {
    egg.style.background = "lightgoldenrodyellow"
})

const people = [
    { id: 1, name: 'Pedro Henrique', profession: 'Dentista' },
    { id: 2, name: 'Fábio Alexandre', profession: 'Físico' },
    { id: 3, name: 'Thiago Ferreira', profession: 'Veterinário' },
    { id: 4, name: 'Marcelo Antonio', profession: 'Matemático' },
    { id: 5, name: 'Camilla Midori', profession: 'Engenheira Civil' },
    { id: 6, name: 'Gustavo D\'Aqui', profession: 'Gerente de Marketing' },
    { id: 7, name: 'Ana Paula', profession: 'Front-end developer' },
    { id: 8, name: 'Matheus Manucci', profession: 'Piloto' },
    { id: 9, name: 'Hamilton Silva', profession: 'Advogado' }
  ]

if(people.some(pessoa => pessoa.profession === 'Front-end developer')){
    console.log(' "O array people contém, no mínimo, um(a) Front-end developer."')
}

