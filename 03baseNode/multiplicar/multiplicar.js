//2 * 2 = 4
const fs = require('fs'); //estoy requeriendo el modulo de file system
//fs coloco los paquetes que voy a requerir
//colocar el path donde esta nuestros modulos


//let base = 5;

//CREAR UNA PROMESA
let crearArchivo = (base) => {
        return new Promise((resolve, reject) => {
            //PROMESA   

            //validar que la base dea un numero
            if (!Number(base)) {
                reject(`el valor de la base ${base} no es valido`);
                return;

            }
            let data = ''; //contiene la informacion

            for (let i = 1; i <= 10; i++) {
                data += `${base} * ${i} = ${base * i}\n`; //para imprimir en un archivo
            }

            fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => { //aumento fs es un objeto
                //el path es relativo
                //se crear un archivo .txt y se dirige a la carpeta tablas
                if (err)
                    reject(err);
                else
                    resolve(`el archivo se guardo de la tabla ${base}`);
            });

        });

    }
    //PARA EXPORTAR UNA FUNCION

module.exports = {
    crearArchivo //se exporta para que otros modulos puedan ocupar
}