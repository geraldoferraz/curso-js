// const email = 'geraldoferraz876@gmail.com'

// console.log(email)

// //concatennado strings 

// const firstName = 'geraldo'
// const noName = ' '
// const secondName = 'ferraz'
// const fullName = firstName + noName + secondName 

// console.log(fullName)

// //acessando um unico caractere 

// console.log(fullName[0])

// //usando o lenght 

// console.log(fullName.length)
// console.log(fullName.toUpperCase())

// const index = email.indexOf('@')

// console.log(index)


const email = 'geraldoferraz876@gmail.com'

const lastindex = email.lastIndexOf('a') //ultima vez que o 'a' apareceu na string email 

console.log(lastindex)

const emailSlice = email.slice(0, 16)

console.log(emailSlice)

const emailReplace = email.replace('g' , 'W') //primeiro parametro é oque vai ser substituido e o 2 é oque vai substituir 

console.log(emailReplace, email)