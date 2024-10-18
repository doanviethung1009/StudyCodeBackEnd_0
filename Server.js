const http = require('http');//node.js

const hostname = 'localhost';//localhost
const port = 6969;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n Hoi Dan IT voi Eric');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
