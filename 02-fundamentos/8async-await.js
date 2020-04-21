// let getNombre =async() =>{
//     throw new Error("no existe");
//     return "santy";
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("santy");
        }, 3000);
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `hola como te va  ${nombre} es pero que estes bien `;
}

saludo().then(mensaje => {
    console.log(mensaje);
});
// console.log(getNombre());

// getNombre().then(nombre =>{
//     console.log(nombre);
// }).catch(err =>{

// }