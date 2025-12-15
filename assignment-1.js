const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('<h2>Hello from the server</h2>');
    res.write('</body>');
    res.write('</html>');

    res.end();
});

server.listen(3000);
