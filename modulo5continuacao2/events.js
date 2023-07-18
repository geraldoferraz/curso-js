const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click' , () => {
    const li = document.createElement('li')
    li.innerText = 'novo produto'
    //ul.prepend(li) //para usar o prepend ou o append , tem que passar o pai do li 
    ul.append(li)
})

ul.addEventListener('click', event => {
    const clickedElement = event.target
    
    if(clickedElement.tagName === 'LI'){
        clickedElement.remove()
    }
})

// event.stopPropagation --> nao deixa com que o elemento filho propague em direcao ao elemento pai