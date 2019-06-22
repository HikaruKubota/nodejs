let http = require("http");
let fs = require("fs");

let server = http.createServer(function(req, res){
    let target = "";
    switch(req.url){
      case "/":
      case "/index":
        target = "./html/index.html";
        break;
      case "/next":
        target = "./html/next.html";
        break;
      default:
        res.writeHead(404, {"Content-Type":"text/plain"});
        res.end("bad request");
        return;
    }
    fs.readFile(target, "utf-8", function(err, data){
      res.writeHead(200, {"Content-Type":"text/html"});
      res.write(data);
      res.end();
    });
});

server.listen(1234);
console.log("start");
