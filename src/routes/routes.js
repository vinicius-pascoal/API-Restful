const router = require('express').Router()
const productController = require('../controllers/products')

//verbos http (4 tipos)
//GET - obter dadoos
//POST - enviar/receber dados
//PUT - atualizar dados
//DELETE - remover dados
//PET - altera um campo

router.get('/products/:id?', productController.get)
router.post('/products', productController.post)
router.put('/products/:id', productController.put)
router.delete('/products/:id', productController.remove)

module.exports = router