// const name = 'geraldo'

const func = function (){
    let idade = 19
    return idade 
}

// console.log(func())
// console.log(idade)


let car = {
    name: 'Nivus',
    brand: 'volkswagen',
    colors: ['preto', 'cinza', 'azul'],
    isRunning: false,
    run: function (){
        console.log(`O ${this.name} esta em movimento`)
    },
    stop: function (){
        console.log(`O ${this.name} esta parado`)
    },
    getColors: function(){
        return `O ${car.name} está disponível nas cores ${car.colors.join(', ').replace(this.colors[this.colors.length - 1], `e ${this.colors[this.colors.length - 1]}`)}`
    }
}

// car.run()
// car.stop()
console.log(car.getColors())


// console.log(`O carro é um ${car['brand']} ${car['name']}`)