/** 
 * normal function
*/
function printStuff(stuff) {
    console.log(stuff)
}

printStuff('Hello world!')

/** 
 * passing a function as argument
*/
function mainFunction(subfunction, arg) {
    subfunction(arg)
}

mainFunction(printStuff, 'Hello world!...')

/** 
 * declaring variable as function
 * This is called as anonymous function
*/
var myFunc = function(arg) {
    console.log("Hellow", arg, 'from MyFuc')
}

myFunc("Gandhi")

/** 
 * passing a anonymous function as argument
*/
mainFunction(function(arg){console.log('Hello', arg, 'From Anonymous')}, 'Raja')