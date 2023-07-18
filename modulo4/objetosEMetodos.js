let user = {
    name: 'geraldo',
    age: 19,
    email: 'geraldoferraz876@gmail.com',
    city: 'recife',
    blogPosts: [  
    {title : 'empadao de frango', likes: 30},
    {title : 'pure de batata', likes: 50}
    ],
    login: function (){
        console.log('usuario logado')
    },
    logout: function(){
        console.log('usuario deslogado')
    },
    logBlogPosts: function () {
        console.log(`essas foram as publicacoes de ${this.name}`)

        this.blogPosts.forEach(post => {
            console.log(post.title, post.likes)
        })
    }
}

// user.age = 32
// user.name = 'maria'
// user['city'] = 'sao paulo'
// user['blogPosts'] = ['gera é lindo']

// console.log(user.age, user.name,user.city,user['blogPosts'])

// user.login()
// user.logout()
user.logBlogPosts()
 