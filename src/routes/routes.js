const router = require('express').Router()
const productCOntroller = require('../controllers/products')

//verbos http (4 tipos)
//GET - obter dadoos
//POST - enviar/receber dados
//PUT - atualizar dados
//DELETE - remover dados
//PET - altera um campo

router.get('/products',productCOntroller.get)
//router.post('/products',productCOntroller.post)
//router.put('/products/:id',productCOntroller.put)
//router.delete('/products/:id',productCOntroller.delete)

module.exports = router