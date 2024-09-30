const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const MongoDB = require("mongodb");

const dbURL = 'mongodb://localhost:27017';

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

const dbConnect = new MongoDB.MongoClient(dbURL);

if (dbConnect) {
    console.log("Connected");
}
else {
    console.log("Not Connected");
}



app.get('/getdata', async function(req,res){

    const database = await dbConnect.connect();
    const db = database.db("MongoDBSample");
    const collection = db.collection('Users');

    const result = await collection.find().toArray();

    res.send(result).status(200)
})

app.post('/post-data',async function(req,res){

    const database = await dbConnect.connect();
    const db = database.db("MongoDBSample");
    const collection =  db.collection('Users');

    const result = await collection.insertOne(req.body);

    res.send(result).status(200);
})

app.get("/getdata/:id", async function(req,res){
    const database = await dbConnect.connect();
    const db = database.db("MongoDBSample");
    const collection = db.collection('Users');

    const result = await collection.findOne({_id:new MongoDB.ObjectId(req.params.id)});

    res.send(result).status(200);
})

app.put('/put-data/:id', async function(req,res){
    const database = await dbConnect.connect();
    const db = database.db("MongoDBSample");
    const collection = await db.collection('Users');

    const result = await collection.findOneAndUpdate({_id:new MongoDB.ObjectId(req.params.id)},{$set:req.body});

    res.send(result).status(200);
})

app.delete('/delete-data/:id', async function(req,res) {
    const database = await dbConnect.connect();
    const db = database.db("MongoDBSample");
    const collection = db.collection('Users');

    const result = await collection.findOneAndDelete({_id:new MongoDB.ObjectId(req.params.id)});

    res.send("Data deleted").status(200);
})

app.listen(2400, () => {
    console.log('Server Running');

})