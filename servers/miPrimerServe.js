
const http = require('http');


/*  servidores
creacion 
req = peticion
res = respuestan*/
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    /**respuesta a las peticiones */
    res.end('respuesta correcta');
});

server.listen(3000);

/* servidores*/