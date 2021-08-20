function test(x,y) {
    return x*2
    console.log(x)
    return x/2
}
console.log(test(10)) 

// El primer return corta la ejecución del bloque

// Convertor pulgadas a centímetros
function convertor (pulgadas) {
    return pulgadas * 2.54
}
console.log (convertor(3))

//String a URL
function url (pagina) {
    return "http://www."+pagina+".com"
}
console.log (url('pepito'))

//Frase con admiración
function admiracion(frase) {
    return "¡"+frase+"!"
}
console.log (admiracion('Hola Mundo'))

//Edad de los perros
function edadPerros(añosPerros) {
    return añosPerros*7
}
console.log(edadPerros(8))

// Valor hora de trabajo
function horaTrabajo (sueldo) {
    return sueldo/40
}
console.log(horaTrabajo(1000))

//Calculador IMC - m y kg
function calculadorIMC(altura,peso) {
    return peso/(altura*altura)
}
console.log(calculadorIMC(1.86, 85))

// Minúscula a mayúscula (toUpperCase)
function mayuscula (palabra) {
    return palabra.toUpperCase()
}

console.log(mayuscula('alfabeto'))

// Tipo de dato (typeof)
function tipoDato (dato) {
    return typeof"dato"
}
console.log(tipoDato('hola'))

//Circunferencia de circulo --- Math
function circunferencia(radio) {
    return 2*Math.PI*radio
}
console.log(circunferencia(25))