const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

// console.log(arrayProfesionales)

//A

console.log('------19.A------')

// let nombreEspecialidad = arrayProfesionales.forEach(profesional => console.log(profesional.nombre + ' - ' + profesional.especialidad))

// nombreEspecialidad

//B Utilizar un método de array que permita recorrer todo el arrayProfesionales y modificar de cada uno la propiedad honorarioConsulta incrementado el valor de la misma en un 5%, luego imprimir el arrayProfesionales para ver la modificación realizada.

console.log('------19.B------')

let honorarioConsulta5 = arrayProfesionales.map(profesional => profesional.honorarioConsulta * 1.05)

console.log(honorarioConsulta5)

//C Utilizar un método de array que permite recorrer todo el array de profesionales y retornar profesionales deshabilitados, es decir, filtrar por la propiedad estaHabilitado cuando esta sea false, guardar el retorno de este filtro en una variable profesionalesDeshabilitados e imprimir la misma para verificar los objetos filtrados.

console.log('------19.C------')

let profesionalesDeshabilitados = arrayProfesionales.filter(profesional => profesional.estaHabilitado === false)

console.log(profesionalesDeshabilitados)

//D Utilizar un método de array que permite recorrer todo el array de profesionales y retornar profesionales habilitados, es decir, filtrar por la propiedad estaHabilitado cuando esta sea true, guardar el retorno de este filtro en una variable profesionaleHabilitados e imprimir la misma para verificar los objetos filtrados.

console.log('------19.D------')

let profesionaleHabilitados = arrayProfesionales.filter(profesional => profesional.estaHabilitado === true)

console.log(profesionaleHabilitados)

//E Utilizar un método de array que permite recorrer todo el array de profesionales y retornar profesionales cuya especialidad sea Arquitecto, es decir, filtrar por la propiedad especialidad cuando esta sea igual a ‘Arquitecto’, guardar el retorno de este filtro en una variable arquitectos e imprimir la misma para verificar los objetos filtrados.

console.log('------19.E------')

function mostrarArquitectos(array) {
    let arquitectos = array.filter(profesional => profesional.especialidad == 'Arquitecto')
    return arquitectos
}

console.log(mostrarArquitectos(arrayProfesionales))

//F Utilizar un método de array que permita recorrer todo el array y modificar de cada uno la propiedad estaHabilitado a true, se recomienda utilizar la variable obtenida del punto C, es decir la variable profesionalesDeshabilitados , imprimir el resultado de este método.

console.log('------19.F------')

let profesionalesAhoraHabilitados = profesionalesDeshabilitados.map(profesionales => profesionales.estaHabilitado = true)

console.log(profesionalesAhoraHabilitados)

//G 

console.log('------19.G------')

//H 

console.log('------19.H------')



// CLASE 20

// A Utilizar un método de array que retorne los primeros 5 profesionales del arrayProfesionales, no debe modificar él array original, él resultado de este método asignar a una variable primerosCincoProfesionales luego hacer la impresión de la misma

console.log('---------------CLASE 20-------------------')

console.log('------20.A------')

let primerosCincoProfesionales = arrayProfesionales.slice(0,5)

console.log(primerosCincoProfesionales)

// B Utilizar un método de array que nos permita reemplazar el profesional con id 14 por un nuevoProfesional, es decir se modificará él arrayProfesionales, luego imprimir él mismo para verificar él cambio. 

console.log('------20.B------')

const nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
}

arrayProfesionales.splice(14,1,nuevoProfesional)

console.log(arrayProfesionales)

 // C Ahora necesitamos un método para ordenar él arrayProfesionales de según la propiedad honorarioConsulta de menor a mayor, mostrar él array ordenado
 
 console.log('------20.C------')

 console.log(arrayProfesionales.sort((a,b) => a.honorarioConsulta - b.honorarioConsulta))

 // D Utilizar un método para realizar una búsqueda sobre él arrayProfesionales del profesional con identificador 15,es decir, que retorne solo un profesional. Asignar este resultado a una variable luego realizar la impresión de la misma.

 console.log('------20.D------')

 let profesionalID15 = arrayProfesionales.find(profesional => profesional.identificador == 15)

 console.log(profesionalID15)


 const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 2);
console.log(citrus)

const array1 = [5, 12, 8, 130, 44];
console.log(array1.find(element => element > 10)) 