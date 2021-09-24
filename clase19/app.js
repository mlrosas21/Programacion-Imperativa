const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

// console.log(arrayProfesionales)

//A

let nombreEspecialidad = arrayProfesionales.forEach(profesional => console.log(profesional.nombre + ' - ' + profesional.especialidad))

nombreEspecialidad

//B Utilizar un método de array que permita recorrer todo el arrayProfesionales y modificar de cada uno la propiedad honorarioConsulta incrementado el valor de la misma en un 5%, luego imprimir el arrayProfesionales para ver la modificación realizada.

let honorarioConsulta5 = arrayProfesionales.map(profesional => profesional.honorarioConsulta * 1.05)

console.log(honorarioConsulta5)

//C Utilizar un método de array que permite recorrer todo el array de profesionales y retornar profesionales deshabilitados, es decir, filtrar por la propiedad estaHabilitado cuando esta sea false, guardar el retorno de este filtro en una variable profesionalesDeshabilitados e imprimir la misma para verificar los objetos filtrados.

console.log('------------------DESHABILITADOS-------------------------')

let profesionalesDeshabilitados = arrayProfesionales.filter(profesional => profesional.estaHabilitado === false)

console.log(profesionalesDeshabilitados)

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

console.log('--------------HABILITANDO PROFESIONALES------------')

function habilitarProfesionales(array) {
    let nuevosProfesionalesHabilitados = array.map(profesionales => profesionales.estaHabilitado = true)
    return nuevosProfesionalesHabilitados
}

console.log(habilitarProfesionales(profesionalesDeshabilitados))

//G Ahora necesitamos obtener un valor que nos indique la cantidad de consultas atendidas por todos los profesionales, para ello utilizaremos un método de array nos facilite esto, asignamos él retorno de este método en una variable llamada cantidadTotalConsultas, luego imprimir la misma.

console.log('------------------CONSULTAS-------------------')

function consultasTotales(array) {
    let sumaConsultas = array.reduce((suma, profesional) => suma + profesional.cantidadConsultas, 0)
    return sumaConsultas
}

const cantidadTotalConsultas = consultasTotales(arrayProfesionales)

console.log(`La suma total de consultas de todos los profesionales es ${cantidadTotalConsultas}`)

/* Utilizar un método de array, que nos permita retornar un nuevo array de
objetos literales únicamente con las propiedades nombre, especialidad y
recaudación que será él resultado de multiplicar las propiedades
cantidadConsulta * honorarioConsulta, asignar él retorno de este método a una
variable arrayRecaudacion e imprimir la misma, la salida por terminal se debería
ver como los siguiente:
[
{
nombre: 'Huber Wilkins',
especialidad: 'Neumonologia',
recaudacion: 4015.36
},
{
nombre: 'Goldie Haley',
especialidad: 'Cardiologia',
recaudacion: 9302.24
},
{
nombre: 'Pena Landry',
especialidad: 'Dermatologia',
recaudacion: 0
},
…] */

console.log('------------------NUEVO ARRAY-------------------')

let recaudacion = arrayProfesionales.map(profesional => profesional.honorarioConsulta * profesional.cantidadConsultas)

console.log(recaudacion)