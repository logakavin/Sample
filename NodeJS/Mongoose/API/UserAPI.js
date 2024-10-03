const express = require('express');
const router = express.Router();
const Users = require('../Schemas/User');

router.get('/getuser', async function(req,res){
    await Users.find()
        .then(function(user){
            res.send(user).status(200)
        })
        .catch(function(error){
            res.send(error).status(400)
        })

})

router.post('/postuser', async function(req,res){
    const {Name,Email,Phone} = req.body;

    await Users.create({
        Name:Name,
        Email:Email,
        Phone:Phone
    })
    .then(function(user){
        res.send(user).status(200)
    })
    .catch(function(error){
        res.send(error).status(400)
    })
})

router.get('/getuser/:id', async function(req,res){
    await Users.findById(req.params.id)
    .then(function(user){
        res.send(user).status(200)
    })
    .catch(function(error){
        res.send(error).status(400)
    })
})

router.put('/updateuser/:id', async function(req,res){
    const {Name,Email,Phone} = req.body;

    await Users.findByIdAndUpdate(req.params.id,{
        Name:Name,
        Email:Email,
        Phone:Phone
    })
    .then(function(){
        res.send('Data Updated').status(200)
    })
    .catch(function(error){
        res.send(error).status(400)
    })
})

router.delete('/deleteuser/:id', async function(req,res){
    await Users.findByIdAndDelete(req.params.id)
    .then(function(){
        res.send('Data Deleted').status(200)
    })
    .catch(function(error){
        res.send(error).status(400)
    })
})

module.exports = router;