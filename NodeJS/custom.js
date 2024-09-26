const http = require('http');

function runServer() {

    http.createServer(function (req, res) {
        res.write("<h1>Welcome to NodeJS </h1>");
        res.end();
    })
        .listen(3400, () => {
            console.log('server running');
        });

}


module.exports = {runServer};