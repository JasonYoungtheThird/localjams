var express = require('express')
var app = express()

// app.get('/',function(req, res){
//   res.send('Hello World')
// })

app.use(express.static('client'))

app.listen(8080)

console.log('Listening on port 8080')