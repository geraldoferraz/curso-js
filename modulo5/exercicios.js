const getCatInfo = () => {
    var name = 'Marcos'
    var age = 3
    var color = 'Cinza'

    return {
        name: name,
        age: age,
        color: color
    }
  }

console.log(`${getCatInfo().name} é um gato ${getCatInfo().color} de ${getCatInfo().age} anos.`)  


let randomNumbers = [3, 2, 1]

const inverso = randomNumbers.reverse()

console.log(inverso)

let crazyArray = [
    { prop1: '1', prop2: '2' },
    function getMessage () { return 'hi' },
    [ 5, 96, 53  ]
  ]

console.log(crazyArray.shift())
console.log(crazyArray)

const dogs = [
    { name: 'Olivia', age: 3, gender: 'Female', breed: 'Maltês' },
    { name: 'Zé', age: 2, gender: 'Male', breed: 'Pug' },
    { name: 'Jade', age: 4, gender: 'Female', breed: 'Shiba inu' },
    { name: 'Zequinha', age: 7, gender: 'Male', breed: 'Poodle' },
    { name: 'Xica', age: 6, gender: 'Female', breed: 'Chihuahua' }
  ]

const Zequinha = dogs.find(dog => dog.name === 'Zequinha')

console.log(Zequinha)

 const node = document.querySelectorAll('h1.secondary-title')
 console.log(node)