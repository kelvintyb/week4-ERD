//passenger details form
var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
  res.render('bookings')
}).get('/new', function(req, res) {
  res.render('bookings')
}).get('/:id', function(req, res) {
  res.send("Flight " + req.params.id + '\'s details')
}).get('/:id/edit', function(req, res) {
  res.send("Editing Flight " + req.params.id + ' details')
})

router.post('/', function(req, res) {
  var flight = req.body.newDeathtrap.id
  var destination = req.body.newDeathtrap.destination
  var deptDate = req.body.newDeathtrap.deptDate
  var arrDate = req.body.newDeathtrap.arrDate
  res.send('Flight ID is: ' + flight + '\nDestination: ' + destination + '\nDeparture Date is(hopefully): ' + deptDate + '\nArrival Date is(probably not): ' + arrDate);
})

router.put('/:id', function(req, res) {
  res.send('Edited Flight' + req.params.id)
})

router.delete('/:id', function(req, res) {
  res.send('a random code monkey has discarded your flight. Good Luck!!!')
})

module.exports = router;
