const Product = require('../models/product.model');  

const createProduct = (req, res) => {
    Product.create(req.body) 
    .then(createProduct =>res.json(createProduct))
    .catch(err =>res.json(err));
}

const viewProduct = (req, res) => {
        Product.find({}) 
        .then(viewProduct =>res.json(viewProduct))
        .catch(err =>res.json(err));
    }

    const viewOneProduct = (req, res) => {
        Product.findOne({_id:req.params.id}) 
        .then(viewOneProduct =>res.json(viewOneProduct))
        .catch(err =>res.json(err));
    }

    const updateProduct = (req, res) => {
        Product.findOneAndUpdate(req.body) 
        .then(updateProduct =>res.json(updateProduct))
        .catch(err =>res.json(err));
    }

    const deleteProduct = (req, res) => {
        console.log("deleting...")
        //use html reuqests in the controller i.e. deleteMany, deleteOne 
        Product.deleteOne({_id:req.params.id})
        .then(deleteProduct =>res.json(deleteProduct))
        .catch(err =>res.json(err));
    }

    module.exports = {
        viewProduct,
        createProduct,
        viewOneProduct,
        updateProduct,
        deleteProduct,
}