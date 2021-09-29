let fs = require('fs')
let autosJson = fs.readFileSync('autos.json')
let arrayAutos = JSON.parse(autosJson)

const carrera = {
    autos: arrayAutos,
    autosPorTanda: 6,
    autosHabilitados: function () {
        return this.autos.filter(auto => auto.sancionado == false)
    },

    listarAutos: function(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(`Piloto: ${array[i].piloto}; Patente: ${array[i].patente}; Velocidad: ${array[i].velocidad} km/h; Peso: ${array[i].peso} kg; Estado: ${array[i].sancionado == true ? 'Sancionado' : 'Habilitado'}`)
        }
    },
    buscarPorPatente: function(patente) {
        let autosEncontrados = [];
        return autosEncontrados = this.autos.find(auto => auto.patente === patente)
    },
    filtrarPorCilindrada: function(cilindrada) {
        return this.autosHabilitados().filter(auto => auto.cilindrada <= cilindrada)

    },
    ordenarPorVelocidad: function() {
        return this.autos.sort((a,b) => a.velocidad - b.velocidad)
    },
    habilitarVehiculos: function(patente) {
        let autoEncontrado = this.buscarPorPatente(patente)
        autoEncontrado.sancionado = false
    }
}

console.log('-------------Filtro por patente-------------')
console.log([carrera.buscarPorPatente('ABC123')])
console.log('-------------Filtro por cilindrada-------------')
console.log(carrera.filtrarPorCilindrada(1500))
// console.log(carrera.ordenarPorVelocidad())
