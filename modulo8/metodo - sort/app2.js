const Book = [
    {name: 'codigo limpo', Price: 30},
    {name: 'o milagre da manha', Price: 5},
    {name: 'lice no pais das maravilhas', Price: 10},
    {name: 'quem pensa enriquece', Price: 50},
    {name: 'o livro da ciencia', Price: 40}
]

const filterBooks = Book
    .filter(item => item.Price > 20)
    .map(item => `O preco do livro '${item.name}' caiu para ${item.Price}`)

console.log(filterBooks)