console.log('User 1 makes a request')
setTimeout(callback, 5000)

console.log('User 2 makes a request')
setTimeout(callback, 5000)

console.log('User 3 makes a request')
setTimeout(callback, 5000)

function callback(){
    console.log('query the database and deliver data in 5 secs')
}

