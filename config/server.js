//modulo de configuração do server

const express = require('express')

const app = express()

// definir o motor de views como sendo o ejs
app.set('view engine', 'ejs')

// setar o diretorio de views do EJS
app.set('views', './app/views')

// configuração arquivos estáticos
app.use(express.static('./app/public'))

module.exports = app