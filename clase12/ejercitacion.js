//const alicia = [23, 69, 32];
//const bob = [12, 67, 43];

//const alicia = [12, 67, 43];
//const bob = [23, 69, 32];

const alicia = [23, 69, 32];
const bob = [23, 69, 32];

function encontrarGanador(a, b) {
    var puntosPrimerParticipante = 0;
    var puntosSegundoParticipante = 0;
    var ganador;
    //continua con esto.
    for(let i=0;i<a.length;i++){
        if (a[i]>b[i]){
            puntosPrimerParticipante += 1; //puntosPrimerParticipante = puntosPrimerParticipante + 1
        }else if (b[i]>a[i]){
            puntosSegundoParticipante += 1;
        }
    }
    if (puntosPrimerParticipante>puntosSegundoParticipante){
        ganador = "Primer "
    }else if (puntosSegundoParticipante>puntosPrimerParticipante){
        ganador = "Segundo "
    }else{
        ganador = "Empate"
    }
return ganador;
}

let comp= encontrarGanador(alicia, bob);

if (comp == "Primer " || comp == "Segundo "){
    console.log("El ganador es: " + encontrarGanador(alicia, bob) + "participante");
}else{
    console.log("El resultado es: " + encontrarGanador(alicia, bob));
}

// Bonus 1

function digitalHouse(a, b) {
    for(let i=0;i<=100;i++){
        if (i%a==0 && i%b==0){
            console.log("Digital House")
        }else if(i%a==0){
            console.log("Digital")
        }else if(i%b==0){
            console.log("House")
        }else{
            console.log(i)
        }
    }
}

digitalHouse(25, 10)

// Bonus 2

let arrayNum1 = [1, 5, 62, 1, -5]
let arrayPal = ['h', 'o', 'l', 'a']

function sumArray(array) {
    let suma = 0
    for (i=0; i<array.length; i++) {
        suma += array[i]
    }
    return suma
}

console.log(sumArray(arrayNum1))
 // asdas

 let array = [1,3,4,5,6]

function encontrarCinco(array) {
  let i = 0; 
  let encontrado = false;
  do{
    if(array[i] === 5 ){
      encontrado = true;
      console.log('encontre un cinco')
    }
    else{
      console.log(array[i])
    }
    i++;
  }
  while(!encontrado)
}
encontrarCinco(array)





