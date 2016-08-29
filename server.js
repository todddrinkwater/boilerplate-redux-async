var express = require('express')
var path = require('path')

var app = express(express.static)

app.use(express.static(path.join(__dirname, './public')))

app.get('/api/v1/:subreddit/posts', (req, res) => {
  var data = {
    posts: [
      {title: 'dog'},
      {title: 'cat'},
      {title: 'pig'},
    ],
    subreddit: req.params.subreddit
  }

  res.json(data)
})

app.listen(3000)

