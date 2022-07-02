const express = require("express");
var app = express();
var routes=require('./routes');
const {MongoClient}  = require('mongodb');
const url = 'mongodb://localhost:27017'; // any url of your project instead of localhost
const myDbName= 'sampledb';
const client = new MongoClient(url); // object to connect the db with given url


app.get("/",function(request,response){
response.send("Hello World!")
})
app.use('/api',routes);

console.log("response")

app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});

async function getData() {
let result = await client.connect();
let db = result.db(myDbName);
let collection = db.collection('student');
console.log(collection.find().toArray()); // this will return promise as {pending}
console.log(await collection.find().toArray()) // adding await will return data in readable format i.e. in json format
}

getData();