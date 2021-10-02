const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Martin Rosas";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const archivos = require('./jsonHelper')


// A

const gestionDePeliculas = {

// B

    peliculas: archivos.leerJson('./peliculas'),

// C

    listarPeliculas: function(array) {
        array.forEach(e => {
            console.log(`${e.titulo}, de ${e.director}. Duración: ${e.duracion} minutos, ${e.genero}, (${e.calificacionIMDB} / 10 en IMDB)`)   
        });
    },

// D

    buscarPorId: function(id){
        return this.peliculas.find(e => e.id == id)
    },

// E

    peliculasPorGenero: function(genero) {
        return this.peliculas.filter(e=>e.genero == genero)
    },

// F 

    filtrarPorCalificacion: function(min,max) {
        return this.peliculas.filter(e=> min <= e.calificacionIMDB && e.calificacionIMDB <= max)
    },

// G

    ordenarPorDuracion: function() {
        return this.peliculas.sort((a,b) => b.duracion - a.duracion)
    },

// H

    duracionPromedio: function() {
        let suma = this.peliculas.reduce((acum,e) => acum + e.duracion,0)
        let promedio = suma / this.peliculas.length
        return `El promedio de duración de las películas es de: ${promedio} minutos`
    },

// I

    modificarGeneroPorId: function(id, nuevoGenero) {
        let peliculaBuscada = this.buscarPorId(id)
        if (peliculaBuscada) {
            peliculaBuscada.genero = nuevoGenero
            archivos.escribirJson('peliculas', this.peliculas)
            return this.peliculas
        }
    }

}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas)
console.log(o);

console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorId(1))
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPorGenero('Drama'))
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorCalificacion(6,7))
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorDuracion())
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionPromedio())
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
gestionDePeliculas.modificarGeneroPorId(8, 'Acción - Aventura')
console.log(gestionDePeliculas.buscarPorId(8))
console.log(o);
