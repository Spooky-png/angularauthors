const authorsController = require('../controllers/authors')

module.exports = function(app){
    app.get('/api/authors', authorsController.index)
    app.get('/api/authors/:authorId', authorsController.getOneAuthor)
    app.post('/api/authors', authorsController.create)
    app.post('/:id/quotes', authorsController.createQuote)
    app.put('/api/authors/:authorId', authorsController.update)
    app.delete('/api/authors/:authorId', authorsController.delete);
}