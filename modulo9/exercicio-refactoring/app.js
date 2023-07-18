/*
  01

  - Exiba no console um boolean indicando se o caractere ':' existe na string 
    abaixo.
*/

const message = 'Próxima etapa: 10'
console.log(message.includes(':'))

/*
  02

  - Exiba no console um boolean indicando se o item '635' existe no array 
    abaixo.
*/

const numbers = [979, 2673, 41, 77, 276, 554, 399, 385, 65, 726, 635, 833, 462]
console.log(numbers.includes(635))




// refatorando o todo-list

const input = document.querySelector('.form-add-todo')
const ul = document.querySelector('.todos-container')
const search = document.querySelector('.form-search input')


input.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

   if(inputValue.length){
   ul.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `
    event.target.reset()
}
})

ul.addEventListener('click', event => {
    const clickedElement = event.target

    if(Array.from(clickedElement.classList).includes('delete')){
        const element = event.target.parentElement
        element.remove()
    }
})
search.addEventListener('input' , event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(ul.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })

    Array.from(ul.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
})
