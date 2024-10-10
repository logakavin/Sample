const express = require('express');
const router = express.Router();
const File = require('../Schemas/File');
const multer = require('multer');
const fs = require('fs');
//multer config

const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()} - ${file.originalname}`)
    }
})

const upload = multer({storage:fileStorage});

router.use('/file',express.static('uploads'));

router.get('/getfile', async function(req,res){
    await File.find()
    .then(function(file){
        res.send(file).status(200)
    })
    .catch(err=>{req.send(err)});
})

router.post('/postfile', upload.single('image') ,async function(req,res){
    
    console.log(req.body);
    

    const {Title,SubTitle} = req.body;

    await File.create({
        Title:Title,
        SubTitle:SubTitle,
        Filename:req.file.filename,
        path:req.file.path
    })
    .then(function(file){
        res.send(file).status(200)
    })
    .catch(err=>{req.send(err)});
})

router.get('/getfile/:id', async function(req,res){
    await File.findById(req.params.id)
    .then(function(user){
        res.send(user).status(200)
    })
    .catch(function(error){
        res.send(error).status(400)
    })
})

router.put('/updatefile/:id', upload.single('img') ,async function(req,res){
    
    await File.findById(req.params.id)
    .then(function(files){
        fs.unlinkSync(files.path);
    })
    
    const {Title,SubTitle} = req.body;

    await File.findByIdAndUpdate(req.params.id,{
        Title:Title,
        SubTitle:SubTitle,
        Filename:req.file.filename,
        path:req.file.path
    })
    .then(function(file){
        res.send(file).status(200)
    })
    .catch(err=>{req.send(err)});
})

router.delete('/deletefile/:id', async function(req,res){
    await File.findById(req.params.id)
    .then(function(files){
        fs.unlinkSync(files.path);
    })

    await File.findByIdAndDelete(req.params.id)
    .then(function(file){
        res.send("deleted").status(200)
    })
    .catch(err=>res.send(err))
})


module.exports = router;