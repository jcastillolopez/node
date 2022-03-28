const colors = require('colors');
const axios = require('axios');
const operaciones = require('./operaciones');

console.log('hola mundi'.green);
/*******************************************/
/* promesa asyncawait*/
/* declaracion funcion */
async function lanzaPeticion() {
    /* lo que realiza la funcion*/
    const response = await axios.get('https://peticiones.online/api/series');
    /* para comprobar el resultado */
    console.log(response.data);
    /****************************************/
};/** llamada funcion aqui o en cualquier sitio */
lanzaPeticion();
/* fin  promesa */
/****************************************************************/
console.log(operaciones.sum(3, 4));
console.log(operaciones.rest(3, 4));
console.log(operaciones.mult(3, 4));