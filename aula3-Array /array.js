let heroes = ['batman' , 'iron man' , 'spider man '] 

console.log(heroes[0])

let ages = [32 , 40, 90, 23, 25]

console.log(ages[2])

const allHeroes = heroes.join() // coloca todos os itens do array , mas todos separados por virgula  
//o argumento do metodo join, é oque vai separar os itens do array

const allAges = ages.indexOf(25) // igual ao tartamento em string
console.log(allAges) 

const moreHeroes = heroes.concat(['wolwerine', 'superman']) // concatena 2 arrays 
//o argumento é oque vai ser adicionado no novo array

const push = heroes.push('cyclope', 'hulk') // adiciona os argumentos em um array que ja existe, ele nao concatena 2 arrays 

const pop = heroes.pop() //remove o ultimo indice do array

console.log(heroes)