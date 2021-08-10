// Carregando Modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const post = require('./routes/post')
const mongoose = require('mongoose')
const path = require('path')

//Configuração
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
       // app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        // app.set('view engine', handlebars);
    //Mongoose
        //Brevemente
    // Public - Indicar
    app.use(express.static(path.join(__dirname, "public")))
//Rotas
app.get('/', (req, res) => {
    res.send('Página Principal dos Usuarios')
})
//Rotas de Outro Arquivo
app.use('/admin', admin)


//Servidor e Outros

const PORT = 2021
app.listen(PORT, () => {
    const message = "Don't Exist Error on Your Server HTTP, NodeJS"
    console.log("Use Nodemon or node, for debug of the application")
    console.log('Server Run on URL: http://localhost:'+PORT)
    console.log(message);
    console.log("Ctrl + C for stoped server!")
  
})


























































