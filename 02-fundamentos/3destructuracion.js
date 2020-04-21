//creacion de objetos
let Diego = {
    nombre: "Armando",
    apellido: "Lema",
    poder: "programar",
    getNombre: function() { //una funcion
        return `${this.nombre} ${this.apellido} ${this.poder}`;

    }
}

//opcion1
console.log(Diego.getNombre()); //invocando al metodo

let nom = Diego.nombre;
let ape = Diego.apellido;
let pod = Diego.poder;
//opcion2 destructuracion de objetos
let { nombre: primernombre, apellido, poder } = Diego; //
console.log(`nombre ${primernombre}`, `apellido ${apellido}`, `poder ${poder}`);