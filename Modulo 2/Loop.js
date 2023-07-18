const names = ['gera', 'giovanna', 'wallace']

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// } 

// let i = 0
// while(i < 5){
    // console.log(names[i])
    // i++
// }

const age = 18

if (age > 18){
    console.log(age)
}

const simpsons = ['marge' , 'homer', 'lisa', 'bart']

if (simpsons.length >= 3){
    // console.log('o array tem mts personagens')
}

const password = '@gera2230000'

if(password.length >= 12 && password.includes('1')){
    console.log('senha muito forte')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5){
    console.log('senha forte')
} else {
    console.log('a senha deve conter 8 ou mais caracteres!')
}
