// const scores = [50, 25, 0, 30, 100, 20 , 10]

// for (let i = 0; i < scores.length; i++){
//     if(scores[i] === 0){
//         continue
//     }

//     console.log(`sua pontuacao: ${scores[i]}`)

//     if (scores[i] === 100){
//         console.log('parabens, voce atingiu a pontuacao maxima!')
//         break
//     }
// }

const grade = 'B'

switch (grade){
    case 'A':
        console.log('voce tirou um A')
        break
    case 'B':
        console.log('voce tirou um B')
        break
    case 'C':
        console.log('voce tirou um C')
        break
    case 'D':
        console.log('voce tirou um D')
        break
    case 'E':
        console.log('voce tirou um E')
        break
        console.log('nota invalida')
        break   
}