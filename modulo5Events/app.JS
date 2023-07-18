const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')



button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const clickedElement = event.target.classList[0]
    console.log(clickedElement)
    const names = ['popup-close', 'popup-link', 'popup-wrapper']
    shouldClosePopup = names.some(classname => classname === clickedElement)


    if(shouldClosePopup){
    popup.style.display = 'none'
    }
})

