const names = ['Caio', 'André', 'Dário']

// console.log(names.sort())


const characters = [
    { id: 03, name: 'Simba' },
    { id: 02, name: 'Nala' },
    { id: 01, name: 'Scar' },
    { id: 04, name: 'Mufasa' }
  ]

characters.sort((character1, character2) => character2.id - character1.id)
// debugger

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]
const copy = numbers.map(number => number)

copy.sort((num1,num2) => num1 - num2)


const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]

// console.log(randomNumbers.find(number => number > 50))


const people = ['Cauã', 'Alfredo', 'Bruno']

const arrInvertido = people.sort().reverse()
// console.log(arrInvertido)


const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const saida = ingredients.reduce((accumulator,item) => {
    return `${accumulator} ${item} cozido\n`
},'')

console.log(saida)

const topBrazilmovies = [
    { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
    { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
    { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
    { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
    { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
    { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
    { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
    { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
    { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
    { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
  ]

// const filter = topBrazilmovies.filter(item => item.distributedBy == 'Disney')

const filter = topBrazilmovies.filter(item => {
    if(item.distributedBy == 'Disney'){
        console.log(item.title)
    }
})
console.log(filter)


const pets = [
    { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
    { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
    { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
    { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
    { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
    { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
  ]

console.log(pets.map(item => {
    item.age *= 7
    return item
}))



const ul = document.querySelector('.list-group')


const movieNames = topBrazilmovies
.map(movie => `<li>${movie.title}</li>`)
.join(' ')

console.log(movieNames)

ul.innerHTML = movieNames


