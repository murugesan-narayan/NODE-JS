const { globalAgent } = require('http')
var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient
var url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function(err, client){
    if (err){
        console.log(err)
    } else {
        var db = client.db('fruits');
        console.log('Connected to',url)
        var collection = db.collection('apples')
        collection.deleteMany({})
        var doc1 = {name: 'Red Gala', origin: 'America'}
        var doc2 = {name: 'Green Gold', origin: 'Austria'}
        collection.insertMany([doc1, doc2], function(err, res){
            if (err) console.log(err)
            else console.log('Documents inserted: ',res.insertedCount)
            client.close()
        })
    }
})
