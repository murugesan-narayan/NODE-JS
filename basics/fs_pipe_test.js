var fs = require('fs')

//delete old file if found
var outFileName = 'output_fs_pipe_test.txt' 
try{
    fs.unlinkSync(outFileName)
    console.log(outFileName,'was deleted');
}catch(err){
    if (err.code=='ENOENT') console.log(outFileName,'not found')
    else throw err
}
var inputFileName = 'input.txt'
var readableStream = fs.createReadStream(inputFileName)
var writeableStream = fs.createWriteStream(outFileName)

readableStream.pipe(writeableStream)
console.log('FS Pipe completed read from', inputFileName, 'and written to', outFileName)
