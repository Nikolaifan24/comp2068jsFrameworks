const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res, next) {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/lab2') {
        const { method, x, y } = parsedUrl.query;

        if (!method || !x || !y) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Error: Missing parameters. Use method, x, and y.');
            return;
        }

        const numX = Number(x);
        const numY = Number(y);
        let result;
        let operator;

        switch (method.toLowerCase()) {
            case 'add':
                result = numX + numY;
                operator = '+';
                break;
            case 'subtract':
                result = numX - numY;
                operator = '-';
                break;
            case 'multiply':
                result = numX * numY;
                operator = '*';
                break;
            case 'divide':
                if (numY === 0) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Error: Cannot divide by zero.');
                    return;
                }
                result = numX / numY;
                operator = '/';
                break;
            default:
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end(`Error, Invalid method + '${method}'. Use add, subtract, multiply or divide.` );
                return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`${numX}  ${operator}  ${numY} = ${result}`);
    } else {
        next();
    }
}

app.use(calculate);

app.use((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});