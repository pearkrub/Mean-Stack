var connect = require('connect')

var app = connect()

var logger = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('log')
}

var hello = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hi')
}
app.use('/log',logger)
app.use('/hello',hello)

app.listen(3000)

console.log('Server Running at http://localhost:3000')