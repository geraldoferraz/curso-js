const paragraphs = document.querySelectorAll('p')

// console.log(paragraph.classList)

paragraphs.forEach(paragraph => {
    if(paragraph.innerText.includes('sucess')){
        paragraph.classList.add('sucess')
    } else if (paragraph.innerText.includes('error')){
        paragraph.classList.add('error')
    }
})





