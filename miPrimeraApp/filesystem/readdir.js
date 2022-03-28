
const fs = require('fs');
const fsPromises = require('fs/promises');

/*recuperar ficheros y directorios  reddir
1- sincrono*/

const files = fs.readdirSync('../miPrimeraApp');
console.log(files);

/*   asyncrono */

fs.readdir('../miPrimeraApp', (err, files) => {
    if (err) console.log(err);
    console.log(files);
});
console.log('final');

/*promesas 
hay que importar la libreia de manera diferente
const fsPromises = require('fs/promises');*/

fsPromises.readdir('../miPrimeraApp')
    .then((files) => {
        console.log(files);
    });

/* promesas asyncawait 
(async()=>{               ;})();
*/
(async () => {
    const files_ = await fsPromises.readdir('../miPrimeraApp');
    console.log(files);
})();

  /***************************************** */
      
    