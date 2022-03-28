const fs = require('fs');

/*
 * readdir y readFile
 * sacar por consol EL CONTENIDO Ficheros ,md
 * hay que mirar  todos y leer los md.
 */

const files = fs.readdirSync('./ficheros')
console.log(files)

for (let file of files) {
    if (file.endsWith('.md')) {
        let data = fs.readFileSync(`./ficheros/${file}`, 'utf-8')
        console.log(data);
    }
};

/* fs.readdir('./ficheros', (err, files) => {
    for (let file of files) {
        if (file.endsWith('.md')) {
            const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
            console.log(data);
        }
    }
}); */
fs.readdirSync('./ficheros').filter(file => file.endsWith('.md'))
    .forEach(file => {
        fs.readFileSync(`./ficheros${file}`,`utf-8`)
    });



    