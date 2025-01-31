const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Read the index.html file
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log('Server running on port ', PORT);
});
