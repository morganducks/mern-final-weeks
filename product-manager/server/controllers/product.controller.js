const Product = require('../models/product.model');  

   
const createProduct = (req, res) => {
    Product.create(req.body) 
    .then(createProduct =>res.json(createProduct))
    .catch(err =>res.json(err));
}

const viewProduct = (req, res) => {
        Product.find(req.body) 
        .then(viewProduct =>res.json(viewProduct))
        .catch(err =>res.json(err));
    }

    module.exports = {
        viewProduct,
        createProduct,
}