
const fs = require('fs');
const fsPromise = require('fs/promises')
/* lee el contenido d e un fichero*/

const content = fs.readFileSync('./ficheros/prueba.text', 'utf-8');
console.log(content);

fs.readFile('./ficheros/prueba.text', 'utf-8', (err, data) => {
    console.log(data)
});
fsPromise.readFile('./ficheros/prueba.text', 'utf-8')
    .then((data) => {
        console.log(data);
    });
    