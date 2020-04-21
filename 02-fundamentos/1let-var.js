/*
//con var se crea una variable
var nombre1 = "Eduardo 2";
//let sea nombre
let nombre = "Santiago";
nombre = "Eduardo"
console.log(`hola ${nombre1}`);
console.log(`hola ${nombre}`);
*/
//con clg podemos sacar el console.log para imprimir
//console.log();
let nombre = "Eduardo";
//la parte del if es otro bloque por eso 
//no sale error al utilizar la misma variable nombre

if (true) {
    let nombre = "Santiago";

}
console.log(`hola ${nombre}`);
//al de finir la i dentro del bucle for no sale un error ya que
//el valor dinal a imprimir esta fuera 
/*
for (let i = 0; i <= 5; i++) {
    console.log(`i=${i}`);
}
console.log(`valor final de i: ${i}`);
*/
//al definir la variable fuera ya no presenta el error
let i;
for (i = 0; i <= 5; i++) {
    console.log(`i=${i}`);
}
console.log(`valor final de i: ${i}`);