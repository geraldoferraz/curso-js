my3FavoriteTvShows = ['teen wolf', 'friends', 'serie do neymar']

const sentence = `Minhas 3 séries favoritas são: ${my3FavoriteTvShows[0]}, ${my3FavoriteTvShows[1]} e ${my3FavoriteTvShows[2]}.`

// console.log(my3FavoriteTvShows.length == 3)

const randomTVShow = 'teen wolf'
const isRandomTVShowIncluded = my3FavoriteTvShows.includes(randomTVShow)

// console.log(isRandomTVShowIncluded)

const typeSentence =  `O tipo de dado que a const 'isRandomTVShowIncluded' armazena é: ${typeof isRandomTVShowIncluded} .`

// console.log(typeSentence)

const num = 39
const len = typeSentence.length
const frase = `A string que a "typeSentence" armazena tem mais de ${num} caracteres? ${len > num}.`


// console.log(len)
// console.log(frase)

const falsyValues = [0, "", false, '', ``, null, undefined, NaN]
const len2 = falsyValues.length


const frase2 =`Todos os ${len2} itens do array "falsyValues" são falsos. Inclusive o ${falsyValues[2]}.`

// console.log(frase2)

const ages = ['31, 82, 61 e 11']
const soma = Number(ages['31, 82, 61 e 11'])
const sum = soma[0] + soma[2]

// console.log(sum)

const isNotAString = typeof randomTVShow !== 's tring'
// console.log(isNotAString) 

const evenNumbers = [0, 2, 4, 6, 8, 10]

const apareceu = (evenNumbers.indexOf(8))
const bool = evenNumbers[4] == 8
console.log(bool)

