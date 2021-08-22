var http = require('http')
var url = require('url')

function startServer(route, handle){
    function onRequest(req, res){
        var reviewData = ''
        var path = url.parse(req.url).pathname
        console.log('Request received for', path)
        req.setEncoding('utf8')
        req.addListener('data', function(chunk){
            reviewData += chunk
        })
        req.addListener('end', function(){
            route(handle, path, res, reviewData)
        })
    }
    http.createServer(onRequest).listen(8888)
    console.log('Server started on port 8888...')
}
exports.startServer = startServer