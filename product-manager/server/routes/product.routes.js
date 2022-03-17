const ProductController = require('../controllers/product.controller');  

module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct); 
    app.get('/api/product', ProductController.viewProduct); 
    app.get('/api/product/:id', ProductController.viewOneProduct); 
    app.get('/api/product/:id', ProductController.viewNewProduct); 
    app.delete('/api/product/:id', ProductController.deleteProduct); 
}

