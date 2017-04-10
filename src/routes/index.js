var request = require('superagent')
var express = require('express')
var router = express.Router()

var jack = 'https://itunes.apple.com/search?term=jack+johnson'

router.get('/', function (req, res) {
  request
  .get(jack)
  .end(function (err, res) {
     if (err) {
       callback(err)
     } else {
       callback(null, res.body)
     }
   })
})

router.post('/', function (req, res) {
  db.saveWidget(req.body)
  res.sendStatus(200)
})

module.exports = router
