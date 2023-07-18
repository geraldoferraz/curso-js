// metodos de array 
// 1 - MAP --> percorre cada item do array e faz uma transformacao em cada item 

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => {
    return item * 2 
})

// console.log(doubleNumbers)

//2 - Filter --> percorre o array e retorna um array so com alguns itens do array original

const randomNumbers = [33, 37, 88, 99, 67]

const biggestNumbers = randomNumbers.filter(item => item > 37)

// console.log(biggestNumbers)

// 3 - reduce --> output do array

const soma = [1, 2, 3]

const sum = soma.reduce((accumulator, item) => {
   return accumulator + item
}, 0)

// console.log(sum)
