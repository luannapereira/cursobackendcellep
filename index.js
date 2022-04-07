// npm init
// git init
// npm install express
// npm install -g nodemon
// npm install ejs

const app = require ('./config/server')

// rota home
app.get('/', function(req, res){
    res.render('home/index')
})

// rota notícias
app.get('/noticias', function(req, res){
    res.render('news/noticias')
})

// rota admin
app.get('/admin' , function(req, res){
    res.render('admin/form_add_noticia')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
})