// const best2019Movies = [
//     { title: 'Parasita', directedBy: 'Bong Joon-ho' },
//     { title: 'Bacurau', directedBy: 'Kleber Mendonça Filho' },
//     { title: 'O Irlandês', directedBy: 'Martin Scorsese' },
//     { title: 'Entre Facas e Segredos', directedBy: 'Rian Johnson' },
//     { title: 'Turma da Mônica: Laços', directedBy: 'Daniel Rezende' },
//     { title: 'Homem-Aranha: No Aranhaverso', directedBy: 'Peter Ramsey' },
//     { title: 'Klaus', directedBy: 'Sergio Pablos' },
//     { title: 'Fora de Série', directedBy: 'Olivia Wilde' },
//     { title: 'Shazam', directedBy: 'David F. Sandberg' },
//     { title: 'História de um Casamento', directedBy: 'Noah Baumbach' },
//     { title: 'Varda por Agnès', directedBy: 'Agnès Varda' },
//     { title: 'A Vida Invisível', directedBy: 'Karim Aïnouz' }
//   ]

//   message =  `Segundo o site Omelete, os melhores filmes de 2019 são : `

// best2019Movies.forEach(movie => {
//     message += `${movie.title}, dirigido por ${movie.directedBy}`
// })

// console.log(message)

const youtubeUser = {
    name: 'Roger Melo',
    chanelUrl: 'https://www.youtube.com/channel/UCmjDevp9Y8r-qi-xueD3Izg',
    videos: {
      total: 111,
      recentVideos: [
        { title: 'Introdução ao TDD - Parte 02 | JavaScript | Jest', length: '28:28' },
        { title: 'Introdução ao TDD | JavaScript | Jest', length: '19:29' },
        { title: 'Higher-order Functions | JavaScript', length: '47:38' }
      ]
    },
    about: {
      description: '🔥 Ensino as pessoas a alcançarem a fluência em JavaScript! 🔥',
      socialNetworks: {
        twitter: 'https://twitter.com/rogermelodev',
        gitHub: 'https://github.com/Roger-Melo'
      },
      country: 'Brasil',
    },
    getMessage () {
        console.log(` Vídeos recentes de ${this.name}:`)
    
        this.videos.recentVideos.forEach(video => {
            console.log(video.title)
        });
    }
  }

  youtubeUser.getMessage()
