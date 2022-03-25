const AuthorController = require('../controllers/authors.controller');  

module.exports = (app) => {
    app.post('/api/authors', AuthorController.createAuthor); 
    app.get('/api/authors', AuthorController.viewAuthors); 
    app.get('/api/authors/:id', AuthorController.viewOneAuthor); 
    app.delete('/api/authors/:id', AuthorController.deleteAuthor); 
    app.put('/api/authors/:id', AuthorController.updateAuthor);
}

