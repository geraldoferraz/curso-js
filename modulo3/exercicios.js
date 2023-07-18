// const mult = function (num1, num2){
//     return num1 * num2
// }

// console.log(mult(12, 3))


// const div = function (num1 , num2){
//     return num1 / num2
// }

// console.log(div(12, 3))


// const rep = function (){
//     for(let i = 1;i <= 7;i++){
//         if (i > 7){
//             break
//         }
//     console.log(`Esta é a ${i}ª vez que essa string é exibida.`)
//     }
// }

// console.log(rep())

// const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
// const newArray = []
// const tam = millennialWords.length

// const newArr = function (millennialWords, newArray,tam) {
//     for (let i = 0; i < tam;i++){
//         newArray.push(millennialWords[i].toUpperCase())
//     }
//     return newArray
// }

// console.log(newArr(millennialWords,newArray,tam))

// const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]

// const contNumbers = function (array = [], positivo = 0, negativo = 0){
//     for (let i = 1;i <= array.length; i++ ){
//         if(array[i] >= 0){
//             positivo++
//         } else {
//             negativo++
//         }
//     }
//     return `O array "randomNumbers" possui ${array.length} números, sendo ${positivo} positivos e ${negativo} negativos.`
// }

// console.log(contNumbers(randomNumbers))

getOddNumbers = ([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])
const newARRAY = []

const imp = function(array = [], newArr = []){
    for (let i =0; i<array.length;i++){
        if(array[i] % 2 != 0){
            newArr.push(array[i])
        }
    }
    return newArr
}


console.log(imp(getOddNumbers, newARRAY))