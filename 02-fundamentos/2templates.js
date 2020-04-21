let nombre = "Diego";
let real = "Diego Lema";
//dos formas de presentacion de impresiones
console.log(nombre + " " + real);
console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + " " + real;
let nombreTemplate = `${nombre} ${real}`;
console.log(nombreCompleto === nombreTemplate);
//el triple igual compra si entre los nombre de let 
//como resultado debe dar un vuleano como verdero o falso
//en este cano nos dio como resultado un True

function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`El nombre es: ${getNombre()}`);