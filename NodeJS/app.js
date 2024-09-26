console.log('Hello world..! Welcome to NodeJS');

// const windows = require('os');
// console.log(windows.cpus());
// console.log(windows.machine());
// console.log(windows.tmpdir());
// console.log(windows.networkInterfaces());

// const http = require('http');
// http.createServer(function(req,res){
//     res.write("<h1>Welcome to NodeJS Server</h1>");
//     res.end();
// })
// .listen(3400,()=>{
//     console.log('server running');
// });


const fs = require('fs');

fs.writeFileSync('sample.txt','Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Tempora mollitia expedita molestiae consectetur sint doloremque cupiditate ducimus ullam qui? Quo illo repellat incidunt dolor\n aliquam impedit consectetur, aspernatur neque repellendus.')

console.log(fs.readFileSync('sample.txt','utf-8'));  


fs.unlinkSync('sample.txt');

const custom= require('./custom')
custom.runServer()

// const {runServer} = require('./custom');
// runServer();