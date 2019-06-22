let http = require('http');

let server = http.createServer(
  function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write('hello world');
    res.end();
  }
);

server.listen(1234);
console.log('起動しました');
