const http=  require('http');

//req-->incomming request parameter, res- outgoing parameter 
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('<h1>welcome to our home page</h1>')
    }
    if(req.url==='/history')[
        res.end('this is the history page ')
    ]
    res.end(`<h1>Oops!!!</h1>
    <p>we cant seem to find the page you are looking </p>
    <a href="/" > back home </a>`);


})
server.listen(5000);