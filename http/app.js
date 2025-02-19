import http from 'http';
http.createServer(function(req,res){
    res.end("hello world")
}).listen(2074);

