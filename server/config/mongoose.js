const mongoose   = require('mongoose');
const path       = require('path');
const fs         = require('fs');

mongoose.connect('mongodb://localhost/author_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath).forEach(file => {
  if (file.includes('.js')) {
    require(path.join(modelsPath, file));
  }
});