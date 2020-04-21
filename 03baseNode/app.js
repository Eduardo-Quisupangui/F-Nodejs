//2 * 2 = 4
/*
const fs = require('fs'); //estoy requeriendo el modulo de file system
//fs coloco los paquetes que voy a requerir
//colocar el path donde esta nuestros modulos

let data = ''; //contiene la informacion
let base = 5;
for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`; //para imprimir en un archivo
}

fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => { //aumento fs es un objeto
    //el path es relativo
    //se crear un archivo .txt y se dirige a la carpeta tablas
    if (err) throw err;
    console.log(`el archivo se guardo de la tabla ${base}`);
});

//PARA SEGUIR AGREGANDO EN EL MISMO ARCHIVO
// fs.writeFile(`tablas/tabla ${base}.txt`, data, { flag: 'a' }, (err) => {
//     //con flag puedo agragar mas cosas a mi mismo archivo .txt
//     if (err) throw err;
//     console.log(`el archivo se guardo de la tabla ${base}`);
// });
*/

/*
//SEGUNDA PARTE

//voy a utilizar
//const multiplicar = require('./multiplicar/multiplicar ');
//utilizando destruccturacion
const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 3;
let base = (process.argv[2].split)('=')[1]; //se debe mandar los parametros como estan definidas las pocisisones
//console.log(base);


crearArchivo(base)
    .then(mensaje => console.log(mensaje))
    //me debuelve una promesa
    .catch(err => console.log(err));

*/


//TERCERA PARTE   
// npm init para paquetes
//instalamos yargs

const argv = require('yargs') //toca configurar los comandos
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }, //creamos otro argumento
        limite: {
            aias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
console.log(argv.base, argv.limite);