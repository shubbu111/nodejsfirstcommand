// const http = require('http');
// const Server = http.createServer((req, res) => {
//     console.log('Shubham');
//     res.end('<h1>Shubham</h1>')
//   });

//   Server.listen(4000);


// const http = require('http');
// const Server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   //process.exit();// this for hard exit the server we dont need this to use so the user will not be able access the server
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>')
//   res.write('<head><title>My first page</title></head>');
//   res.write('<body><h1>Hello World</h1></body>');
//   res.write('</html>');
//   res.end();
// });

// Server.listen(4000);

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Page</title><head>");
  if (req.url === "/home") {
    res.write("<body><h1>Welcome Home</h1><body>");
  } else if (req.url === "/about") {
    res.write("<body><h1>Welcome to About Us page</h1><body>");
  } else if (req.url === "/node") {
    res.write("<body><h1>Hello from my node JS server</h1><body>");
  } else {
    res.write("<body><h1>Hello World !!! </h1><body>");
  }
  res.write("</html>");
  res.end();
});

server.listen(4000);


