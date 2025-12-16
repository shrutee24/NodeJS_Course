const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        //Receive data
        req.on('data', (chunk) => {
            console.log('chunk'+chunk);
            body.push(chunk);
        });

        //Data finished
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();//Take all incoming request chunks, join them together, and convert them into readable text.
            console.log(parsedBody); // message=hello

            const message = parsedBody.split('=')[1];
            console.log(message); // hello

            //Redirect
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
});

server.listen(3000);
