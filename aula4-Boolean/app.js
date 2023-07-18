const email = 'geraldoferraz876@gmail.com'
const includes = email.includes('@') // ve se o @ esta presente na string e retorna true ou false 

// console.log(includes)

const names = ['dio' , 'roger' , 'robert']
const arrayIncludes = names.includes('robert')

console.log(arrayIncludes) 

const age = 31 
const secondAge = 33 
const name = 'roger'

// console.log(age == secondAge) //comparacao de igualdade 
// console.log(age != secondAge) //comparacao de diferenca 
// nas comparacoes, ocorre conversao de tipos. por isso, voce pode comparar numbers com strings, com array de strings que o resultado vai ser correto

console.log(age === 31)
// === compara o valor e o tipo 
// ex : age === 31 -> ele ta falando que age tem o mesmo valor de 31 e é do mesmo tipo
console.log(age !== 31)
console.log(age !== '31')// leva em consideracao o tipo  


