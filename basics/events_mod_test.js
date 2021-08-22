var events = require('events')
var eventEmitter = new events.EventEmitter()

var ringbell = function(){
    console.log('Ring ring ring...')
}
var welcome = function(name){
    console.log('Welcome', name)
}

eventEmitter.on('pressBell', ringbell)
eventEmitter.on('bellRings', welcome)
eventEmitter.emit('pressBell')
eventEmitter.emit('bellRings', 'NodeJS')
