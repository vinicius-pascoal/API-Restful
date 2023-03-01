const express = require('express');
//const path = require('path');

//const db = require('./database');
const routes = require('./routes/routes');

const app = express()

//conectando ao banco de dados
//db.connect()

//habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }))

//definindo rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 5050
app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) })
