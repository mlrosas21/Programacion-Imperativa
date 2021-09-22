// Arrow Functions 

//1. Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

let pulgadasCm = pulgadas => 2.54*pulgadas;

//2. Crear una función que recibe un string y lo convierte en una una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”

let generadorUrl = string => 'http://www.'+string+'.com';

//3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

let admiracion = string => string+'!';

//4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

let aniosHumanosPerros = anios => anios * 7;

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considera que tu mes de trabajo tiene 40 horas.

let valorHoraTrabajo = sueldoMensual => sueldoMensual/40

//6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona. Luego, ejecutar la función probando diferentes valores.

let calculadorIMC = (altura,peso) => peso/Math.pow(altura, 2)

//7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Investiga que hace el método de strings .toUpperCase()

let stringMayusculas = string => string.toUpperCase()

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. pista: te servirá revisar que hace la palabra reservada typeof.

let tipo = dato => typeof(dato)

//9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi

let circunferencia = radio => 2*radio*Math.PI

// Callbacks

//1. A partir del siguiente array de nombres, crear una función que reciba un parámetro string, para realizar la búsqueda de elementos que coincidan con dicho parámetro, y retorna un mensaje en caso de encontrar.

// 2. Para manejar el error en caso de no encontrar coincidencias crearemos una función llamada mostrarResultado que reciba un parámetro, la misma deberá consultar si el parámetro es un string vacío mostrar un mensaje de “Nombre no encontrado”, en caso contrario mostrar el mensaje “El nombre fue encontrado”.

const nombres = ['Martin','Homero','Cosme','Steven','Adam'];

function buscarNombre(nombre, callback){
    let nombreEncontrado
    for(i=0;i<nombres.length;i++) {
        if (nombre == nombres[i]) {
            nombreEncontrado = nombre[i]
        } else { 
            nombreEncontrado = ' '
        }
    }
    callback(nombreEncontrado)
}

function mostrarResultado(res) {
    if (res == ' ') {
        return 'Nombre no encontrado'
    } else {
        return 'El nombre '+res+' fue encontrado'
    }
}

console.log(buscarNombre('dss',mostrarResultado))

