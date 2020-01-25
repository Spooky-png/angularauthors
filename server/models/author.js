const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minlength: [3, 'Name must be at least 3 characters long.'],
        maxlength: [50, 'Name cannot exceed 50 characters. Sorry bro.']
    },
    quotes: {type: String,
            required: [true, 'Quote is required.'],
            minlength: [3, 'Quote must be at least 3 characters long.'],
            rating: 0,
    }
    }, {timestamps: true});

mongoose.model('Author', AuthorSchema);