let user = {
    name: 'lua',
    age: 12,
    color: 'white',
    bestFriends: ['lua', 'frida', 'luke', 'fred'],
    sound: function (){
        return 'miauu' 
    }
}

console.log(cat)

console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu ${user.name}, "age", que recebeu ${user.age}, "color", que recebeu ${user.color}, "bestFriends", que recebeu um array com os itens ${user.bestFriends[0]} e ${user.bestFriends[1]}, e "sound", que recebeu uma função que retorna ${user.sound()}.`)

user.age = 14

// console.log(user['age'])

const newFriend = (array = [], name) => array.push(name)

newFriend(user.bestFriends, 'george')

console.log(user.bestFriends)

const newColor = (cor) => user.color = cor 

newColor('verde')

console.log(user.color)

const object = () => {
    return typeof user == "object"
}

console.log(object())

let dog = {
    name: 'abidoral',
    age: 18,
    color: 'marrom',
    bestFriends: ['lua', 'frida', 'luke', 'fred'],
    sound: function (){
        return 'auuuwww' 
    }
}


const sum = (idadeCat, idadeDog) => {
    soma = idadeCat + idadeDog
    return `A soma das idades de ${user.name} e ${dog.name} é ${soma}.`
}

console.log(sum(user.age, dog.age))

// const isAnSUV = car => {
//     if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
//       return true
//     }
  
//     return false
//   }


const suvs = ['Honda HR-V', 'jeep renegade', 'ford ecoSport', 'Hyundai ix35']

const isAnSUV = car => suvs.includes(car)

console.log(isAnSUV('nivus'))


const func = type => {
    const obj = {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado.',
        Object: 'Arrays, Datas, Objetos literais, Funções, etc.'
    }
return obj[type]
}

console.log(func('null'))
console.log(func('undefined'))
