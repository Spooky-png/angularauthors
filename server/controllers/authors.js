const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
  index(req, res) {
    Author.find()
    .then((authors) => {
      res.json({authors: authors})
    })
    .catch((err) => res.json({errors: err}))
  },
  getOneAuthor(req, res) {
    Author.findById(req.params.authorId)
      .then(Author => {
        res.json({author:Author})
      })
      .catch((err) => res.json({errors: err}))
},
  create(req, res) {
      Author.create(req.body)
      .then(newAuthor => res.json(newAuthor))
      .catch((err) => res.json({errors: err}))
  },
  createQuote: function(request, response) {
    console.log(request.body)
    Author.findById(request.params.id)
      .then(author => {
        author.quotes.message.push(request.body)
        return author.save();
      })
      .then(author => response.json(author))
      .catch((err) => res.json({errors: err}))
  },
  update(req, res) {
    Author.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
    .then((updatedAuthors) => {
      res.json({authors: updatedAuthors})
    })
    .catch((err) => res.json({errors: err}));
  },
  delete(req, res) {
      Author.findByIdAndDelete(req.params.authorId)
        .then(deletedAuthor => {
          res.json({author:deletedAuthor})
        })
        .catch((err) => res.json({errors: err}))
  },
};