// const redesSociais = ['twitter', 'facebook', 'instagram']

// redesSociais.forEach((redeSocial, index, array) => { //primeiro parametro é o item atual que ta sendo iterado
//     console.log(redeSocial,index,array)
// })


//callbacks 

const ul = document.querySelector('[data-js ="ul"]')


const redesSociais = ['twitter', 'facebook', 'instagram']
let HTMLTemplate = ''

redesSociais.forEach((redeSocial) => {
    HTMLTemplate += `<li style="color: deeppink;">${redeSocial}</li>`
})

// ul.innerHTML = HTMLTemplate