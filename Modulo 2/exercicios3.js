// const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']

// for (let i = 0 ; i < animals.length;i++){
//     if(animals[i] === 'leão'){
//         console.log('temos o animal leao no array')
//     } else {
//         console.log('o animal leao nao esta presente no array')
//     }
// }

// const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
// soma = 0

// for (let i = 0; i < randomNumbers.length; i++){
//     soma += randomNumbers[i]

//     if (soma > 400){
//         console.log(`A soma ultrapassou 400. Até aqui, o valor atual é ${soma}`)
//         break
//     }
// }

// const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
// let juncao = []

// for (let i = 0 ; i < sentence.length;i++){

//     if (sentence[i] === 'certeza'){
//         continue
//     }
//     juncao += sentence[i] + ' '
// }

// console.log(juncao)


const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]
num = 0
str = 0
bool= 0

for (let i =0; i<randomValues.length;i++){
    if (randomValues[i] === 'number'){
        num++
    } else if (randomValues[i] === 'boolean'){
        bool++
    }else{
        str++
            if(str == 4){
                break
            }
    }
}
