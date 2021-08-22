var fs = require('fs')
/**
 * This reads asynchronously which means does not block next line
 * Once reading completed, calls callback function with data/error
 */
fs.readFile('input.txt', function(err, data){
    if(err) console.log(err)
    else console.log('This is from Async Reading:', data.toString())
})

/**
 * This reads synchronously which means blocks next line
 */
var data = fs.readFileSync('input.txt')
console.log('This is from Sync Reading:', data.toString())