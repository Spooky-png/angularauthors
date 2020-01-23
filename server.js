var express = require('express');
    app = express();
    mongoose = require('mongoose');

    app.use(express.static( __dirname + '/public/dist/public' ));


const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 30
    }
    }, {timestamps: true});
   const Author = mongoose.model('Author', AuthorSchema);

mongoose.connect('mongodb://localhost/author_db', { useNewUrlParser: true })

app.use(express.json());
app.get('/authors',(req, res) =>{
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}),
app.post('/authors',(req, res) =>{
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}),
app.post('/new', (req,res) =>{
    const author = new Author();
    author.name = req.body.name;
    author.save()
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}),
app.get('authors/:id', (req,res) =>{
    Author.findOne({_id: req.params.id})
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
});
app.put('/authors/:id', (req,res) =>{
    Author.findOne({_id: req.params.id})
        .then(authors =>{
            authors.name = req.body.name;
            return authors.save()
        })
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
});
  app.delete('/remove/:id', (req, res) =>{
    const author = Author.findOne({_id: req.params.id})
        author.remove({_id: req.params.id})
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}),
app.listen(8000, function () {
    console.log("server running on port 8000");
});