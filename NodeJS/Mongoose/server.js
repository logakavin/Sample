require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const UserAPI = require('./API/UserAPI');
const FileAPI = require('./API/FileAPI');

app.use(cors({origin:'http://localhost:3000'}))
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
app.use('/file', FileAPI)


app.listen(process.env.PORT,()=>{
    console.log("Server running" + process.env.PORT);  
})