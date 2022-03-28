

const fs = require('fs');
const fsPromise = require('fs/promises');

/* escritura en ficheros
    ** sincrona */
fs.appendFileSync('./ficheros/escritura.txt', 'texto a escribir en el fichero');

/* asincrono ***/
fs.appendFile('./ficheros/escritura.txt', '\n\nTexto del asincrono', (err) => {    
});
/* promesas */
fsPromise.appendFile('./ficheros/escritura.txt', '\nTexto escrito desde la promesa')
    .then(err => { });