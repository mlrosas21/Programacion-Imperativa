const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

// console.log(arrayProfesionales)

//A

// let nombreEspecialidad = arrayProfesionales.forEach(profesional => console.log(profesional.nombre + ' - ' + profesional.especialidad))

// nombreEspecialidad

//B Utilizar un método de array que permita recorrer todo el arrayProfesionales y modificar de cada uno la propiedad honorarioConsulta incrementado el valor de la misma en un 5%, luego imprimir el arrayProfesionales para ver la modificación realizada.

let honorarioConsulta5 = arrayProfesionales.map(profesional => profesional.honorarioConsulta * 1.05)

console.log(honorarioConsulta5)

//C Utilizar un método de array que permite recorrer todo el array de profesionales y retornar profesionales deshabilitados, es decir, filtrar por la propiedad estaHabilitado cuando esta sea false, guardar el retorno de este filtro en una variable profesionalesDeshabilitados e imprimir la misma para verificar los objetos filtrados.

let profesionalesDeshabilitadosVariable = []

function mostrarDeshabilitados(array) {
    profesionalesDeshabilitados = array.filter(profesional => profesional.estaHabilitado === false)
    profesionalesDeshabilitadosVariable = return profesionalesDeshabilitados
}

console.log(mostrarDeshabilitados(arrayProfesionales))

console.log('VARIABLE PROFESIONALES DEHABILITADOS' + profesionalesDeshabilitados)

//D Utilizar un método de array que permite recorrer todo el array de profesionales y retornar profesionales habilitados, es decir, filtrar por la propiedad estaHabilitado cuando esta sea true, guardar el retorno de este filtro en una variable profesionaleHabilitados e imprimir la misma para verificar los objetos filtrados.

console.log('------------------HABILITADOS-------------------------')

function mostrarHabilitados(array) {
    let profesionalesHabilitados = array.filter(profesional => profesional.estaHabilitado === true)
    return profesionalesHabilitados
}

console.log(mostrarHabilitados(arrayProfesionales))

//E Utilizar un método de array que permite recorrer todo el array de profesionales y retornar profesionales cuya especialidad sea Arquitecto, es decir, filtrar por la propiedad especialidad cuando esta sea igual a ‘Arquitecto’, guardar el retorno de este filtro en una variable arquitectos e imprimir la misma para verificar los objetos filtrados.

console.log('-----------ARQUITECTOS----------------------')

function mostrarArquitectos(array) {
    let arquitectos = array.filter(profesional => profesional.especialidad == 'Arquitecto')
    return arquitectos
}

console.log(mostrarArquitectos(arrayProfesionales))

//F Utilizar un método de array que permita recorrer todo el array y modificar de cada uno la propiedad estaHabilitado a true, se recomienda utilizar la variable obtenida del punto C, es decir la variable profesionalesDeshabilitados , imprimir el resultado de este método.

console.log('--------------------------------HABILITANDO PROFESIONALES----------------------------------')

function habilitarProfesionales(array) {
    array.map(profesionales => profesionales.estaHabilitado = true)
}

console.log(habilitarProfesionales(profesionalesDeshabilitados))

//G 

//H 