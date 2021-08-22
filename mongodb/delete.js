var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient
var url = 'mongodb://localhost:27017/'
async function read(){
    var client = await MongoClient.connect(url)
    
    var db = client.db('fruits');
    console.log('Connected to',url)
    
    var collection = db.collection('apples')
    
    await collection.deleteMany({})
    
    var doc1 = {name: 'Royal Gala', origin: 'Austria'}
    var doc2 = {name: 'Green Gold', origin: 'Austria'}
    var doc3 = {name: 'Green Gold', origin: 'Germany'}
    var res = await collection.insertMany([doc1, doc2, doc3])
    console.log('Documents inserted: ', res.insertedCount)
    
    var query = {origin: 'Germany'}
    var findRes = await collection.find(query).toArray()
    console.log('Before Delete Documents found for querey:', query, findRes)

    var delQuery = {origin: 'Germany'}
    const deleteResult = await collection.deleteMany(delQuery)
    console.log('Deleted documents with delQuery',delQuery, deleteResult.deletedCount)

    findRes = await collection.find(query).toArray()
    console.log('After Delete Documents found for querey:', query, findRes)

    client.close()
}
read();