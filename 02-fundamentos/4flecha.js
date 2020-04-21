// function sumar(a, b) {
//     return a + b;
// }

// console.log(`la suma de 3+4 = ${sumar(3,4)}`);

// let sumar = (a, b) => {
//     return a + b;
// }
// console.log(`la suma de 3+4 = ${sumar(3,4)}`);

//funcion flecha
let sumar = (a, b) => a + b;
console.log(`la suma de 3+4 = ${sumar(3,4)}`);

// function saludar(){
//     return "hola a todos";
// }
let saludar = (nom) => `hola a que tal ${nom}`;
console.log(`${saludar("inge")}`);

//para hacer mas larga

let saludo = () => {
    let a = "santi";
    let b = "alumno";
    return `${a} ${b}`
}
console.log(`${saludo()}`);

// let Diego = {
//     nombre: "Armando",
//     apellido: "Lema",
//     poder: "programar",
//     getNombre: function() { //una funcion
//         return `${this.nombre} ${this.apellido} ${this.poder}`;

//     }
// }
//modo flecha
let nombre = () => {
    let n = "Armando";
    let a = "Lema";
    let p = "programar";
    return `el nombre es ${n} el apellido es ${a} y el poder es ${p}`
}
console.log(`${nombre()}`);