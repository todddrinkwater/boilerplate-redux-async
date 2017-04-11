var request = require('superagent')
var express = require('express')
var router = express.Router()

var jack = 'https://itunes.apple.com/search?term=jack+johnson'

router.get('/', function (req, res) {
  request
  .get(jack)
  .end(function (err, apires) {
     if (err) {
       res.status(500).send(err)
     } else {
       console.log(apires.text);
       res.json(JSON.parse(apires.text))
     }
   })
})

router.post('/', function (req, res) {
  db.saveWidget(req.body)
  res.sendStatus(200)
})

module.exports = router
