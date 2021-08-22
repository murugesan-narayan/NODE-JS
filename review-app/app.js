var server = require('./server')
var router = require('./router')
var handler = require('./handler')

var handle = {
    '/': handler.home,
    '/home': handler.home,
    '/review': handler.review
}

server.startServer(router.route, handle)
