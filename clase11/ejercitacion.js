// Peliculas a mayusculas con for
let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella']
let peliculasMayusculas = []

function convertirAMayusculas (array1, array2) {
    for (i=0; i<array1.length; i++) {
        array2.push(array1[i].toUpperCase())
    }
}
convertirAMayusculas(peliculas, peliculasMayusculas)

peliculasMayusculas


// Agregar contenido de un array a otro
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
let peliculasAnimadasMayusculas = []

convertirAMayusculas(peliculasAnimadas, peliculasAnimadasMayusculas)

peliculasAnimadasMayusculas

let peliculasCompletas = []

function pasajeDeElementos(array1, array2, array3) {
    for (i=0; i<array1.length; i++) {
        array3.push(array1[i])
    }
    for (i=0; i<array2.length; i++) {
        array3.push(array2[i])
    } 
}
pasajeDeElementos (peliculasMayusculas, peliculasAnimadasMayusculas, peliculasCompletas)

peliculasCompletas

/* Concurso de clavados
Un cliente nos pide que hagamos una aplicación que pueda determinar a los
ganadores de un concurso de clavados que se realizó el fin de semana.
Para ello vamos a necesitar seguir las siguientes instrucciones e información para
poder desarrollar nuestra app.

Cada participante cuenta con 5 clavados, de los cuales se formarán sus puntajes
individuales. Los participantes con sus respectivos puntajes son los siguientes:
● Participante A: 5, 8, 4, 9, 5.
● Participante B: 8, 7, 8, 6, 8.
● Participante C: 7, 5, 10, 8, 3.
La competencia consta de 2 modalidades de selección para un ganador:
● Mejor promedio (el mayor puntaje promedio entre los competidores).
● Mayor puntaje (el mayor puntaje de entre los 5 clavados de cada participante).
Con esta información, nuestro tech leader nos pide lo siguiente:
1. Determinar cuál sería la forma ideal de representar a cada participante con sus
puntajes. */

let participanteA = [5, 8, 4, 9, 5]
let participanteB = [8, 7, 8, 6, 8]
let participanteC = [7, 5, 10, 8, 3]

/* 2. Crear una función puntajePromedio la cual recibe un participante por parámetro
y deberá calcular —y retornar— el puntaje promedio del mismo. */

function puntajePromedio(participante) {
    let promedio = 0
    let suma = 0
    for (i=0; i<participante.length; i++) {
        suma += participante[i]
    }
    return promedio = suma/participante.length
}

console.log(puntajePromedio(participanteB))

/* 3. Crear una función puntajeMayor la cual recibe un participante por parámetro y
deberá buscar —y retornar— el mayor puntaje que tenga el participante.*/

function puntajeMayor(participante) {

}

/* 4. Luego, nuestro tech leader nos solicita que —creadas estas dos funciones—
generemos una nueva funcionalidad llamada competencia la cual recibirá a los 3
participantes por parámetros y ejecutará las dos funciones creadas
previamente para calcular los promedios y puntajes mayores de cada uno.
Además, esta deberá anunciar (mostrar por la consola) al ganador de cada
modalidad de puntaje. */