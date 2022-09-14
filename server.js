const connect = require('connect');
const app = connect();

function helloNodeJS(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
};

function helloNodeJShtml(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJS as html</h1>');
}

function helloNodeJSJSON(req, res, next) {
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify({ "message": "Hello from NodeJs as JSON" }));

}



app.use('/html', helloNodeJShtml);
app.use('/json', helloNodeJSJSON);
app.use('/', helloNodeJS);

app.listen(3000);

console.log('Server running at http://localhost:3000/');
