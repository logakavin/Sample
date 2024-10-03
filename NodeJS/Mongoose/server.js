require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const UserAPI = require('./API/UserAPI');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(process.env.DB)
.then(()=>{
    console.log('Conntect to DB');
})
.catch((error)=>{
    console.log(error);
})

app.use('/user', UserAPI)

app.listen(process.env.PORT,()=>{
    console.log("Server running");
    
})