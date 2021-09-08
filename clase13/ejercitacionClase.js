/* Debés crear una función llamada arregloDeObjetos que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}] */

function arregloDeObjetos(numero) {
    let resultado = []
    for (let i=1; i<=numero;i++) {
        let obj = {
            valor: i
        }
        resultado.push(obj)
    }
    return resultado
}

console.log(arregloDeObjetos(15))

/* Debés crear una función llamada arregloDeObjetosDos que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetosDos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
arregloDeObjetosDos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}] */ 

function arregloDeObjetosDos(numero, texto) {
    let resultado = []
    for (let i=1; i<numero;i++) {
        let obj = {
            [texto]: i
        }
        resultado.push(obj)
    }
    return resultado
}

console.log(arregloDeObjetosDos(12, 'chau'))