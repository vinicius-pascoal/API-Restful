const productsModel = require('../models/products')

async function get(req,res) {
    const { id } = req.params
    
    const obj = id ? {_id: id} : null

    //tambem pode ser feito dessa forma 
    //let obj = {}
    //if (id) {
        //obj._id = id
    //}

    const products = await productsModel.find(obj)
    res.send(products)
}

async function post(req,res){
    const {
        name,
        brand,
        price
    } = req.body

    const product = new productsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        mensage: 'sucess'
    })
}

module.exports = {
    get,
    post,
}