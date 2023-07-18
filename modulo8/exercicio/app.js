const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const impar = randomNumbers.filter(item => {
    return item % 2 != 0
})

// console.log(impar)

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const lessThan501 = crazyNumbers.reduce((accumulator, item) => {
    if(item < 501){
        accumulator++
    }

    return accumulator
}, 0)

// console.log(lessThan501)

const numbers = [5, 7, 3]

const double = numbers.map(item => item * item)

// console.log(double)

const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Shadow of the Tomb Raider', price: 101.19 },
    { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
    { name: 'Resident Evil 2', price: 119.90 },
    { name: 'Death Stranding', price: 149.99 }
  ]

counter = 0

const names = cart.reduce((accumulator, product) => {
    return `${accumulator} - ${product.name} \n`
},'')

// console.log(names)

const tarantinoMovies = [
    { name: 'Bastardos inglórios', release: 2009 },
    { name: 'Pulp Fiction', release: 1994 },
    { name: 'Kill Bill: Volume 2', release: 2004 },
    { name: 'Quatro Quartos', release: 1995 },
    { name: 'Sin City', release: 2005 },
    { name: 'Era uma Vez em... Hollywood', release: 2019 },
    { name: 'Django Livre', release: 2012 },
    { name: 'Cães de Aluguel', release: 1992 },
    { name: 'À Prova de Morte', release: 2007 },
    { name: 'Kill Bill: Volume 1', release: 2003 }
  ]

  const films = tarantinoMovies.filter(film => film.release < 2000)

//   console.log(films)

const tvShows = [
    { name: 'Breaking Bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2015 },
    { name: 'True Detective', releaseYear: 2014 },
    { name: 'Hannibal', releaseYear: 2013 },
    { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
    { name: 'House M.D.', releaseYear: 2004 },
    { name: 'Watchmen', releaseYear: 2019 }
  ]

const newArr = tvShows.map(item => {
    return `${item.name}`
})

// console.log(newArr)

