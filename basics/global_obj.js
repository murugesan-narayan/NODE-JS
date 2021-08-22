console.log(__filename)//file name
console.log(__dirname)//directory name

function printHelloForSetTimeout(){
    console.log('Hello...SetTimeout')
}
/** 
 * function which is called after timeout
*/
setTimeout(printHelloForSetTimeout, 5000)

function printHelloForSetInterval(){
    console.log('Hello...SetInterval')
}
/** 
 * function which is called for each interval given
*/
setInterval(printHelloForSetInterval, 7000)

//Ctrl+Del to stop running...
