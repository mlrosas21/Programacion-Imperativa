// Calculadora
// Suma
function sumar(nro1,nro2,nro3) {
    return (nro1+nro2+nro3)
}

// Resta
function restar(nro1,nro2) {
    return (nro1-nro2)
}

// Multiplicación
function multiplicar(nro1,nro2) {
    return nro1*nro2
}
// División
function dividir(nro1,nro2) {
    return nro1/nro2
}

console.log('-------------- Testeo de Operaciones / Calculadora --------------')

let n1 = 8
let n2 = 5
let n3 = 0

// Ejecutando suma y resta
console.log(sumar(n1,n2,n3))
console.log(restar(n1,n2))

// Ejecutando multiplicación
console.log(multiplicar(n1,n2))

// Ejecutando división
console.log(dividir(n1,n2))

// Dividiendo con 0
console.log(dividir(n1,n3))
console.log(dividir(n3,n1))

// Función que eleva al cuadrado
function cuadradoDeUnNumero(nro1) {
    return multiplicar(nro1,nro1)
}

// Ejecutando cuadrado de un número
console.log(cuadradoDeUnNumero(n1))

// Función que saca promedio de 3 números
function promedioDeTresNumeros(nro1,nro2,nro3) {
    return sumar(nro1,nro2,nro3)/3
}

// Ejecutando promedio de 3 números
console.log(promedioDeTresNumeros(n1,n2,n3))


// Función que calcula que numero representa X% del segundo número
function calcularPorcentaje(nro1,nro2) {
    return multiplicar(nro1,nro2)/100
}

//Ejecutando calculadora de %
console.log(calcularPorcentaje(50,n1))

// Función que calcula % del primer numero con respecto al segundo
function generadorPorcentaje(nro1,nro2) {
    return dividir(nro1,nro2)*100
}

// Ejecutando generador de %
console.log(generadorPorcentaje(n1,n2))



