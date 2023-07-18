
const convertToString = value => {
    return String(value)
}

console.log(convertToString(true))



const countCaracter = string => string.length

console.log(countCaracter('ola'))


const lowerCase = frase => frase.toLowerCase()

console.log(lowerCase('CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO'))

const func = (caractere, string) => string.indexOf(caractere)
console.log(func('a', 'geraldo é lindo'))


const bool = (item, array) => array.includes(item) 
console.log(bool(3, [7, 3, 1, 8]))

const arr = (array1, array2) => array1.concat(array2)
console.log(arr([1, 2, 3], [4, 5, 6]))

const remover = (array) => {
    array.pop()
    return array

}
console.log(remover([1, 2, 3, 4, 5, 10]))

const isCallBack = callBack =>{
    callBack()
}

const name = () =>{
    console.log('Geraldo Ferraz')
}

isCallBack(name) 


const isCallBack2 = (value, callBack) => {
    return callBack(value)
}

const triple = num => num * 3

console.log(isCallBack2(33,triple))

const numbers = [1, 2, 3]
 
numbers.forEach((item, index, array) => {
    console.log( `O ${index + 1}º item do array [${array.join(', ')}] é ${item}.`)
})

const letters = ['v', 'e', 'p']
let lettersCopy = []

for (let i = 0; i < letters.length; i++) {
  lettersCopy.push(letters[i])
}

letters.forEach((item) => {
    lettersCopy.push(item)
})

console.log(lettersCopy)


const section = document.querySelector('[data-js="section"]')

const review = [
  'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \o/.',
  'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
  'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
  'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
]

let paragraphs = ''

review.forEach((paragraph) => {
    paragraphs += `<p>${paragraph}</p>`
})

section.innerHTML = paragraphs


const counter = (array) => {
    if (array == null){
        console.log('ninguem curtiu isso')
    } else if (array.length == 1){
        console.log(`${array[0]} curtiu isso`)
    } else if (array.length == 2){
        console.log(`${array[0]} e ${array[1]} curtiram isso`)
    } else if(array.length == 3){
        console.log(`${array[0]}, ${array[1]} e ${array[2]} curtiram isso`)
    } else {
        console.log(`${array[0]}, ${array[1]} e mais ${array.length - 2} pessoas curtiram isso.`)
    }
}

counter(['Roger', 'gera', 'deco', 'giovanna', 'victor'])