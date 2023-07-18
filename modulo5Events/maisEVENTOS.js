const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
    console.log('voce copiou o texto')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', event => {
    console.log(event.offsetX, event.offsetY)
})

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY)
})