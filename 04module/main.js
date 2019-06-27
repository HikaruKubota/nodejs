let http = require("http");
let fs = require("fs");
let url = require("url");
let qs = require("querystring");

let indexPage = fs.readFileSync("./html/index.html","utf-8");

let server = http.createServer(function(req, res){
  if (req.method == "GET") {
    let urlParts = url.parse(req.url, true);
    console.log("GET Request");
    console.log("name = " + urlParts.query.name);
    console.log("age = " + urlParts.query.age);
  }else{
    let body = "";
    req.on("data", function(data){
      body = body + data;
    });
    req.on("end", function(){
      let params= qs.parse(body);
      console.log("POST Request");
      console.log("name = " + params.name);
      console.log("age = " + params.age);
      console.log(params);
    });
  }

  res.writeHead(200, {"Content-Type":"text/html"});
  res.write(indexPage);
  res.end();
});

server.listen(1234);
console.log("start");
