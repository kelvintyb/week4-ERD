var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
var bodyParser = require('body-parser')
var methodOverride = require('method-override');
//set routes
var userRoutes = require('./routes/users');

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index')
  })
  //set middleware for routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/public', express.static('public'));
app.use('/users', userRoutes);

app.listen(port);
console.log('Server started on ' + port);
