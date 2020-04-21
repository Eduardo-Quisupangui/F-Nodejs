// setTimeout(function() {
//     console.log("hola, muchachos");
// },300);
//esta funcio se le tranforma en una funcio flecha 
//y realiza la miasmo funcion 

// setTimeout(() => {
//     console.log("Hola, muchach@s!");
// }, 3000);
//el setTimeout resibe primero el collback y despues el tiempo



//en esta funcion el primer para metro es el id y luego el callback
//estoy definiendo una funcion de tipo flecha
/*
let getUsuarioById = (id, callback) => {
        //el callback es un afuncio que va a invocar  cuando algo ya este realizado
        let usuario = { //se cre un objeto llamado usuario
            nombre: "Eduardo",
            id
        }
        callback(usuario); // llamo al usuario
    }
    //en este punto se programa la funcion getUsuarioBiId

//lo voy a invocar la funcion

getUsuarioById(10, (usuario) => {//coloco el id y el callback pero se coloca el usuario ya que es una
//funcion y mandamos a imprimir lo que tiene el usuario     
    console.log("usuario de la BD:", usuario);
}); 
*/



//creando el mensaje de errro
let getUsuarioById = (id, nickname, callback) => {
        let n = nickname + " Lema"
            //el callback es un afuncio que va a invocar  cuando algo ya este realizado
        let usuario = { //se cre un objeto llamado usuario
                nombre: n,
                id
            }
            //mensaje de error
        if (id === 20) {
            callback(`el usuario con el id ${id} no es valido`);
        } else {
            callback(null, usuario, 25, "quito"); // llamo al usuario, le envio null cuando esta todo carrecto
        }

    }
    //en este punto se programa la funcion getUsuarioBiId

//lo voy a invocar la funcion

getUsuarioById(10, "Santiago", (err, usuario, edad, ciudad) => {
    //puedo resivir varios parametros pero tengo que enviar desde mi callback
    //el callback ahora va a recivir un error y al usuario 
    //coloco el id y el callback pero se coloca el usuario ya que es una
    //funcion y mandamos a imprimir lo que tiene el usuario  
    //validacion
    if (err) {
        return console.log(err); //despues de return no se ejecuta nada mas termina y sale
    }
    console.log("usuario de la BD:", usuario, `tiene ${edad} anios y es de la ciudad de ${ciudad}`);
});











/*
let getUsuarioById = (id, nickname, callback) => {
    let n = nickname + " perez"
    let usuario = {
        nombre: n,
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe!`);
    } else {
        callback(null, usuario, 25);
    }


}

getUsuarioById(10, 'pepito', (err, usuario, edad) => {
    if (err) {
        return console.log(err);
    }

    console.log("Usuario de la BD:", usuario, `edad: ${edad}`);
});
*/