// Caminos

let edad = 15 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas)

if(edad<18) {
console.log("No puede pasar al bar.")
}
else if(edad<21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}
else{
console.log("Puede pasar al bar y tomar alcohol.")
}

// Total a pagar

let vehiculo = "moto"
let litrosConsumidos = 24

function totalAPagar(vehiculo, litrosConsumidos) {
    switch(vehiculo) {
        case "coche":
            precioPorLitro = 86
            break;
        case "moto":
            precioPorLitro = 70
            break;
        case "autobus":
            precioPorLitro = 55
            break;
    }

    litrosConsumidos >= 25 ? precioAdicional = 50 : precioAdicional = 25  
}

totalAPagar('moto', 24)

console.log('El total a pagar es: ' + (precioAdicional+(precioPorLitro*litrosConsumidos)))


//Local sandwiches

function precioSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    switch (base) {
        case "pollo":
            total = total + 150
            break;
        case "carne":
            total = total + 200
            break;
        case "veggie":
            total = total + 100
            break;
    }

    switch (pan) {
        case "blanco":
            total = total + 50
            break;
        case "negro":
            total = total + 60
            break;
        case "s/gluten":
            total = total + 75
            break;
    }
    
    queso ? total + 20 : total + 0;
    tomate ? total + 15 : total + 0;
    lechuga ? total + 10 : total + 0;
    cebolla ? total + 15 : total + 0;
    mayonesa ? total + 5 : total + 0;
    mostaza ? total + 5 : total + 0;

    return total
}

precioSandwich('pollo', 'negro', true, true, false, false, true, false)
