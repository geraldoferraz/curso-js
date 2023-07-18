const ul = document.querySelector('ul')

Array.from(ul.children).forEach(element => {
    element.classList.add('video')
})

const h2 = document.querySelector('h2')

console.log(h2.parentElement)

const lis = document.querySelectorAll('.videos')

lis.forEach(element => {
    element.addEventListener('click', event => {
        const elementClicked = event.target

        console.log(elementClicked)
    })
})


const videos = [{
    name: 'Como o promise all funciona | JavaScript',
    length: '00:01:52'
  }, {
    name: 'Como refatorar um for loop | JavaScript',
    length: '00:04:18'
  }, {
    name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
    length: '00:02:55'
  }]

const button = document.querySelector('button')

button.addEventListener('click', () => {
    videos.forEach(video => {
        ul.innerHTML += `<li>${video.name}</li>`
    })
})

const h1 = document.querySelector('h1')
const body = document.querySelector('body')

h1.addEventListener('click', () => {
    body.remove()
})