let empleados = [{ //creamos un vector
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

let salarios = [{ //segundo vector
        id: 1, //se esta relacionando uno a uno con los id
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

//creacion de funcion flecha
//buscar un empleado
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    //find metodo= permite navegar objeto por objeto, empleado va ir iterando
    if (!empleadoDB) { //para implementar el erro
        callback(`no exite empleado con id ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

//funcion del salario
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`no se encontro salario para ${empleado.nombre} `);

    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }

}


getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    //invocamos al getsalario
    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err);
        }
        console.log(`el salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    })

});


/*
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    //find metodo= permite navegar objeto por objeto, empleado va ir iterando
    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontró salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }
}


getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    })

});
*/