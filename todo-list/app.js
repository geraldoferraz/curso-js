const buttonSubmit = document.querySelector('.new-tesk-button')
const inputText = document.querySelector('.new-tesk-input')
const taskContainer = document.querySelector('.tasks-container')
const removeElement = document.querySelector('.far')
console.log(removeElement)

buttonSubmit.addEventListener('click', event => {
    event.preventDefault()
    inputValue = inputText.value
    const regex = /^.{1,}$/
    const result = regex.test(inputValue)
    console.log(result)

    if(!result){
        inputText.classList.add('error')
    } else if (result){
        inputText.classList.remove('error')
    }

    // const div = document.createElement('div')
    // div.classList.add('task-item')

    const li = document.createElement('li')
    li.classList.add('task-item')

    const paragraph = document.createElement('p')
    paragraph.textContent = inputValue

    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('far')
    deleteIcon.classList.add('fa-trash-alt')

    // div.appendChild(li)
    li.appendChild(paragraph)
    li.appendChild(deleteIcon)
    taskContainer.appendChild(li)

    inputText.value = ''

    const removeElement = document.querySelector('.far')

    removeElement.addEventListener('click', event => {
        clickedElement = event.target.parentElement
        clickedElement.remove()
    })

})


