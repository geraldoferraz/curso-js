// metodo sort é para ordenar
//exemplos 1 -- ordenando strings 

const names = ['christian', 'alfredo', 'edson']

names.sort()
console.log(names) //ordem alfabetica



//exemplo 2 -- ordenando numeros

const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort((item1, item2) => item2 - item1)



//exemplo 3 -- ordenando objetos

const theBigFamily = [
    {name: 'Lineu', score: 20},
    {name: 'Nenê', score: 10},
    {name: 'Tuco', score: 50},
    {name: 'Bebel', score: 30},
    {name: 'Agostinho', score: 70}
]

const newArrr = theBigFamily.sort((score1, score2) => score2.score - score1.score)

console.log(newArrr)