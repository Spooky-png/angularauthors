var express = require('express');
app = express();
require('./server/config/mongoose');
const path = require('path')

app.use(express.json());

app.use(express.static(path.join( __dirname + '/public/dist/public' )));
require('./server/config/routes')(app);
app.all("*", (req,res) => {
    res.sendFile(path.join(__dirname, "./public/dist/public/index.html"))
  });



app.listen(8000, function () {
    console.log("server running on port 8000");
});