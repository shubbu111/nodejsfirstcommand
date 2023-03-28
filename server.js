const http = require('http');
const Server = http.createServer((req, res) => {
    console.log('Shubham');
    res.end('<h1>Shubham</h1>')
  });

  Server.listen(4000);
