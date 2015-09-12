
var http = require('http');
var fs = require('fs');
var data = fs.readFileSync('index.html');
var server = http.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write(data.toString());
res.end('<p>program..</p><h3>End<h3>');
});
var port = Number(process.env.PORT || 3000)
server.listen(port);
