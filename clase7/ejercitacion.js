// Operadores lógicos
//Pt. 1

console.log(!true) //false
console.log(!false) //true
console.log(!!false) //false   
console.log(!!true) //true
console.log(!1) //false
console.log(!!1) //true
console.log(!0) //true
console.log(!!0) //false
console.log(!!"") //false
let x = 5 ;
let y = 9;
console.log(x < 10 && x!==5) //false
console.log(x>9 || x===5) //true
console.log(!(x===y)) //true

//Pt. 2.1

console.log('----------------Pt.2.1--------------------')

//1.
let x1=10
let y1 ="a"

console.log(y1==="b" || x1 >= 10)

//2. 
let x2=3
let y2=8

console.log(!(x2 == "3" || x2 === y2) && !(y2 !== 8 && x2 <= y2))

//3.
let str = ""
let msj = "jaja!"
let esGracioso = "false"

console.log(!((str || msj) && esGracioso))

//Pt. 2.2

console.log('----------------Pt.2.2--------------------')

//1. Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura debe ser mayor a 1,30 m.
let edad = 13
let altura = 1.35

console.log(edad >= 12 && altura >= 1.30) //true

//2. Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos debe usar el flash.
let luz = false
let movimiento = true

console.log(luz || movimiento) //true

//3. Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones parciales, o si obtiene un 4 en el examen final.
let notaParcial1 = 7
let notaParcial2 = 6
let notaFinal = 3

console.log ((notaParcial1 >= 7 && notaParcial2 >= 7) || notaFinal >= 4) //false

//4. Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus prácticas de piano y lo hizo de memoria.
let tarea = true
let practicasPiano = true
let practicasPianoMemoria = true

console.log(tarea && practicasPiano && practicasPianoMemoria) //true

