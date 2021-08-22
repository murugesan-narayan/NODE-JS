
function rely(){
    console.log('This is Rely')
}

function longjumb(){
    console.log('This is Longjumb')
}
//Explicit exports
//module.exports.rely = rely
//module.exports.longjumb = longjumb

//Inline exports
module.exports = {
    rely: rely,
    longjumb: longjumb,
    race_100m: function(){
        console.log('This is 100m Race')
    },
    race_200m: function(){
        console.log('This is 200m Race')
    }
}
