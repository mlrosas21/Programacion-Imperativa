// Identificando variables en dos situaciones de vida cotidiana 
// Partido de futbol con amigos

let lluvia = true; //boolean
let distanciaCancha = 1500; //número
let transporte = 'subte'; //palabra
let jugadoresFaltantes = 2; //número
let temperatura = 23; //número
let tercerTiempo = false; //boolean
let horaPartido = 1530; //número

// Cocinar una pizza

let queso = false; //boolean
let tipoMasa = "a la piedra"; //palabra
let cantidadPizzas = 3; //número
let restriccionesAlimentarias = "vegetariana"; //palabras
let aceitunas = true; //boolean

/* ¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averigualo!
1. Almacená tu edad en una variable.
2. Guardá tu edad máxima en otra variable.
3. Declará una variable con el nombre de tu snack favorito.
4. Estimá cuántos snacks vas a comer por día y guardalo como un
número en una variable.
5. Calculá cuántos snacks te quedan por comer en el resto de tu vida.
6. Mostrá en la consola el resultado: "Vas a necesitar NN snacks para
que te alcancen hasta los XX años.".
7. Agregale un precio por unidad y descubrí cuánto vas a gastar en
snacks el resto de tu vida. */

var edad = 26;
var edadMaxima = 90;
var snackFavorito = '9 de oro agridulce'
var snackPorDia = 15;
var snackRestoDeVida = (90-26)*365*15;
var precioUnidad = 0.0052;

console.log ("Vas a necesitar "+snackRestoDeVida+" snacks para que te alcancen hasta los "+edadMaxima)
console.log ("Vas a gastar "+precioUnidad*snackRestoDeVida)

// Estás organizando tus vacaciones y tenés que calcular cuánto dinero vas a
// necesitar para la comida.
// 1. Almacená la cantidad de días que vas a estar de viaje en una
// variable.
// 2. Estimá tu presupuesto máximo por todo el viaje y guardalo en una
// variable.
// 3. Declará la variable comida
// 4. Estima cuántas comidas vas a tener en todo tu viaje. Guardá este
// valor en una variable.
// 5. Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés
// gastar en cada comida.
// 6. Mostrá la consola el resultado: "Podés gastar XX en cada comida

let diasViaje = 4;
let presupuestoMaximo = 1092;
let comida;
let comidas = 8;
let presupuestoComida = (1092-640)/8;

console.log("Podés gastar "+presupuestoComida+" en cada comida.")