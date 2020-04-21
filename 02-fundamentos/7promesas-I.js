let empleados = [{
        id: 1,
        nombre: "Santiago"
    },
    {
        id: 2,
        nombre: "Wendy"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        //es un objeto por el new
        //resive dos parametros el resolve y el reject y es un callback
        //debuelve si algo esta bien o no esta bien
        //el reject si esta mal
        //el resolve si esta bien 
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}


let getSalario = (empleado) => {
        return new Promise((resolve, reject) => {
            let salarioDB = salarios.find(salario => salario.id === empleado.id)

            if (!salarioDB) {
                reject(`No se encontró salario para el empleado ${empleado.nombre}`);
            } else {
                resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
            }

        });
    }
    /*
    //para invocar las promesas
    getEmpleado(3).then(empleado => {
        //then = entonces
        getSalario(empleado).then(resp => {
            console.log(`el salario de ${resp.nombre} es de ${resp.salario}`);

        }, (err) => {
            console.log(err);
        });

    }, (err) => {
        console.log(err);//los errores se van encadenando si sigo llamado 
        //tengo que seguir llamando a los error tambine para eso utilizamos
        //promesas en cadena
    });
    */

// Promesas en cadena

getEmpleado(2).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => { //el catch es para todas las promesas que son invocadas
    console.log(err);
});
// Consulta: Async y Await