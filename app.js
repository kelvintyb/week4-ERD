var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
var bodyParser = require('body-parser')
var methodOverride = require('method-override');
//set routes
var userRoutes = require('./routes/users');
var bookingRoutes = require('./routes/bookings');
// run methodOverride for all requests
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index', {
      'port': port
    })
  })
  //set middleware for routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use('/public', express.static('public'));
app.use('/users', userRoutes);
app.use('/bookings', bookingRoutes);
app.listen(port);
console.log('Server started on ' + port);
