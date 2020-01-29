let http = require('http');


http.createServer(function(req,res){
    // the replace function removes any query strings and slashes
    // the toLowerCase functions makes it lower case
    path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About');
            break;

        case '/products':
            res.writeHead(200, {'Content-Type' :'text/plain'});
            res.write('We Do  not have any');
            res.end('GoodBye');
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
    }
}).listen(8000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
