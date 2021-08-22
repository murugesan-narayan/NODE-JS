var fs = require('fs')

var data = '';
var readableStream = fs.createReadStream('input.txt')
readableStream.setEncoding('UTF8')
readableStream.on('data', function(chunk){
    data += chunk
})

readableStream.on('end', function(){
    console.log('Read Completed:',data.toString())
})
var outFileName = 'output_fs_rw_test.txt' 
try{
    fs.unlinkSync(outFileName)
    console.log(outFileName,'was deleted');
}catch(err){
    if (err.code=='ENOENT') console.log(outFileName,'not found')
    else throw err
}

var writeData = 'Hello World...this is from nodejs write stream code...'
var writableStream = fs.createWriteStream(outFileName)
writableStream.write(writeData, 'UTF8')
writableStream.end()

writableStream.on('finish', function(){
    console.log('Write Completed:', outFileName)
})