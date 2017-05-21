var static = require('node-static');

var _port = 9000;

var file = new static.Server('./', {
    cache: 0,
    gzip: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
});

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(process.env.PORT || _port);

console.log("Listening to port " + _port);