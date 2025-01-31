const http = require('http');
const fs = require('fs');

// List of allowed origins
const allowedOrigins = [
    'https://pomelo-937304914639.us-central1.run.app',
    'https://googleusercontent.com/'
];

const server = http.createServer((req, res) => {
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
    res.setHeader('Access-Control-Allow-Headers', 'content-type'); // Might be helpful
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups'); // Might be helpful
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp'); // Might be helpful
    
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
