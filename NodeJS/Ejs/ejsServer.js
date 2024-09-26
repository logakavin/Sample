const express =require ('express')
const server= express();
const bodyParser = require('body-parser')

const arr=["car","bike"];
server.set('view engine','ejs');
server.use(bodyParser.urlencoded({extended:true}))

server.get('/ejs',function(req,res){
    res.render("Home",{bikes:arr})
}
)
server.post('/ejs',function(req,res){
    arr.push(req.body.data);
res.redirect('/ejs');
})


server.listen(4444,()=>{
    console.log('ejs is running');
    
})