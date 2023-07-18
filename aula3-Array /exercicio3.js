let brazillianFoods = []

const pop = brazillianFoods.push('coxinha', 'null', 'brigadeiro')

brazillianFoods[1] = 'pao de queijo' 

const maleDogNames = ['Chico', 'Zeca']
const femaleDogNames = ['Lilica', 'Geraldo']

let dogNames = maleDogNames.concat(femaleDogNames)
// let newArray = dogNames.pop()

dogNames.push('nina')
console.log(dogNames)
//"chico", "zeca", "lilica", "geraldo", "nina"] 

let initials = dogNames[0][0] + dogNames[1][0] + dogNames[2][0] + dogNames[3][0] + dogNames[4][0]

console.log(initials.toLowerCase())


let dessert = dogNames[0][3]+dogNames[0][4] + dogNames[2][4] + dogNames[2][5] + dogNames[4][2] + dogNames[4][3]

console.log(dessert)

let oddNumbers = [3, 5, 7]
oddNumbers[1]+= 4

console.log(oddNumbers[1])

let result = oddNumbers[1]**3

console.log(result)






