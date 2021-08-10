const express = require('express')
const post = express.Router()

post.get('/', (req, res) => {
    res.send('Página de Postagens')
})

module.exports = post