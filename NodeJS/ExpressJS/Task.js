const express =require('express')
const app = express();

app.get('/html',function(req,res){
    res.sendFile('Task.html',{root:__dirname})
})
app.listen(5555,()=>{
    const windows = require('os');
console.log(windows.cpus());
console.log(windows.machine());
console.log(windows.tmpdir());
console.log(windows.networkInterfaces());
  
})