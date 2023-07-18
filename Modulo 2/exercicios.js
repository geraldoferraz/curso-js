// let i = 0

// while (i <= 5){
//     console.log(i)
//     i++
// }

// for (let i = 0 ; i <= 5; i++){
    // console.log(i)
// }

for (let i = 1 ; i<=10 ; i++){
    // console.log(`Esta é a ${i}ª vez que esta frase é exibida no console.`)
}

const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities = []

for (let i = 0; i < cities.length ; i++){
    upperCaseCities.push(cities[i].toUpperCase())
}

// console.log(upperCaseCities)

const names = ['João Grilo', 'Chicó', 'Rosinha'] 
HTMLTemplate = ''

for (let i = 0; i < names.length; i++){
    HTMLTemplate += `<li>${names[i]}</li>`
}

// console.log(HTMLTemplate)

const numbers = ['91', '5', '30', '97', '83', '31']
another = []
let soma = 0

for (let i = 0; i < numbers.length; i++){
    another.push(numbers[i])
    soma += Number(another[i])
}

console.log(soma === 337)

const arrays = [
    [4, 32, 8],
    [64, 8, 32],
    [8, 32, 16],
    [2, 8, 4]
  ]

let sum = 0

for (let i = 0; i < arrays.length; i++){
    for(let j = 0; j< arrays[i].length; j++){
        sum += arrays[i][j]
    }
}

// console.log(sum)