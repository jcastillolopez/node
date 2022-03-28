/** 1  REQUERIR EXPRESS  y dotenv*/
const express = require('express');
/** cuando importo express importo una funcion  que es la encargada de generar APP de express que gestiona peticiones y respuestas*/
/** configiuara dotenv */
require('dotenv').config();
console.log(process.env.PORT);

/** ejecuto express */
const app = express();
/** ahora gestionamos la app  GET http://localhost:3000
 * Metodo manejador (handler)*/
// recibe url y funcion
// funcion recibe req y res
app.get('/', (req, res) => {
    //genero respuestas y termino
    res.end('peticion get sobre localhost3000');

});
/** get localhost:3000/info */
app.get('/info', (req, res) => {
    res.end('te envio la Info ');
});
/** POST LOCALHOST:3000/CLIENTS/NEW */
app.post('/clients/new', (req, res) => {
    res.end('te envio los nuevos clientes');
});

/* que pasa si en el fichero env no esta definida la variable PORT puedo poner un valor por defecto*/
var puertoActivo = process.env.PORT ? process.env.PORT : 3000;

app.listen(puertoActivo, () => {
    console.log(`App escucha en el puerto ${puertoActivo}`);
});

 //el ultimo paso del script es escuchar sobre un puerto  (3000 en este caso )*/
/*  app.listen(process.env.PORT, () => {
    console.log(`App escucha en el puerto ${process.env.PORT}`);
});  */