const http = require('http');
const fs = require('fs');

// Regular expression to match all subdomains of googleusercontent.com
const allowedOriginPattern = /^https?:\/\/([a-z0-9-]+\.)*googleusercontent\.com$/;

// List of allowed origins
const allowedOrigins = [
    'https://pomelo-937304914639.us-central1.run.app',
];

const server = http.createServer((req, res) => {
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin) || allowedOriginPattern.test(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');

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
