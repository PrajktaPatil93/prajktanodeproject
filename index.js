const express = require("express");
var app = express();
var routes=require('./routes');
//const {MongoClient}  = require('mongodb');
//const url = 'mongodb://localhost:27017'; // any url of your project instead of localhost
//const myDbName= 'sampledb';
//const client = new MongoClient(url); // object to connect the db with given url
var cors = require('cors');
var bodyParser = require('body-parser');
// Connect to MongoDB
const { mongoose } = require("mongoose");
// import mongoose  from "mongoose";
const mongoUrl = 'mongodb://localhost:27017/sampledb';
mongoose.Promise = require('bluebird');


mongoose.connect(mongoUrl).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch((err) => {

  console.log("MongoDB connection error. " + mongoUrl + " Please make sure MongoDB is running. " + err);
  // process.exit();
});

app.get("/",function(request,response){
response.send("Hello World!")
})

app.use(bodyParser.json())  // Looks like you are hooking up your routes before any parsing middleware, which would explain why you don't get any body (usually if it's hooked up correctly you would at least get an empty object).
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api',cors(),routes);
app.use(cors());




app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});

// async function getData() {
// let result = await client.connect();
// let db = result.db(myDbName);
// // let collection = db.collection('student');
// //console.log(collection.find().toArray()); // this will return promise as {pending}
// //console.log(await collection.find().toArray()) // adding await will return data in readable format i.e. in json format
// }

// getData();