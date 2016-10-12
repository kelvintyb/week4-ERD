//passenger details form
var express = require('express')
var router = express.Router()

// All the GET requests
router.get('/', function (req, res) {
  // all users view under INDEX.EJS
  res.render('users/index')
}).get('/new', function (req, res) {
  // NEW route under NEW.EJS
  res.render('users/new')
}).get('/:id', function (req, res) {
  res.send("user's " + req.params.id + ' details')
}).get('/:id/edit', function (req, res) {
  res.send("edit user's " + req.params.id + ' details')
})

// post request WILL GET SOMETHING
router.post('/', function (req, res) {
  // res.send(req.body)
  var posted_name = req.body.username
  var posted_contact = req.body.contact
  var posted_pwd = req.body.userpwd
  res.send('Username is: ' + posted_name + ' Contact: ' + posted_contact +  ' Password is: ' + posted_pwd)
})

router.put('/:id', function (req, res) {
  res.send('edit user posts ' + req.params.id)
})

router.delete('/:id', function (req, res) {
  res.send('remove user post')
})

module.exports = router
