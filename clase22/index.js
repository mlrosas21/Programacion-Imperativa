const fs = require('fs')
let autosJson = fs.readFileSync('autos.json')
let arrayAutos = JSON.parse(autosJson)

const carrera = {
    autos: arrayAutos,
    autosPorTanda: 6,
    autosHabilitados: function () {
        return this.autos.filter(auto => auto.sancionado == false)
    },

    listarAutos: function(array) {
        array.forEach(e=>{
            console.log(`Piloto: ${e.piloto}; Patente: ${e.patente}; Velocidad: ${e.velocidad} km/h; Peso: ${e.peso} kg; Estado: ${e.sancionado == true ? 'Sancionado' : 'Habilitado'}`)
        })
    },
    buscarPorPatente: function(patente) {
        return this.autos.find(auto => auto.patente === patente)
    },
    filtrarPorCilindrada: function(cilindrada) {
        return this.autosHabilitados().filter(auto => auto.cilindrada <= cilindrada)

    },
    ordenarPorVelocidad: function() {
        return this.autos.sort((a,b) => a.velocidad - b.velocidad)
    },
    habilitarVehiculos: function(patente) {
        let autoEncontrado = this.buscarPorPatente(patente)
        if (autoEncontrado){
            autoEncontrado.sancionado = false
        }
        let autosModificados = JSON.stringify(this.autos)
        fs.writeFileSync('autos2.json', autosModificados)
        return autoEncontrado
    },
    generarTanda: function(cilindrada, peso){
        let autos = this.filtrarPorCilindrada(cilindrada).filter(auto => auto.peso <= peso)
        return autos.slice(0, this.autosPorTanda)
    },
    pesoPromedio: function (cilindrada, peso) {
        let tanda = this.generarTanda(cilindrada, peso)
        let suma = tanda.reduce((a,b) => a + b.peso, 0)
        let promedio = suma / this.autosPorTanda
        return `El peso promedio de los autos de la tanda es ${promedio}`  
    },
    listarPodio: function(array) {
        let ganadores = array.sort((a,b) => b.puntaje - a.puntaje)
        return `
        El ganador es: ${ganadores[0].piloto}, con un puntaje de ${ganadores[0].puntaje}.
        El segundo puesto es para ${ganadores[1].piloto}, con un puntaje de ${ganadores[1].puntaje}.
        El tercer puesto es para ${ganadores[2].piloto}, con un puntaje de  ${ganadores[2].puntaje}.`
    }

}

// console.log('-------------Filtro por patente-------------')
// carrera.listarAutos([carrera.buscarPorPatente('ABC123')])
// console.log('-------------Filtro por cilindrada-------------')
// carrera.listarAutos(carrera.filtrarPorCilindrada(1500))
// console.log('-------------De menor a mayor velocidad-------------')
// carrera.listarAutos(carrera.ordenarPorVelocidad())
// carrera.listarAutos([carrera.habilitarVehiculos('JHV223')])
// console.log(carrera.generarTanda(2400, 1800))
// console.log(carrera.pesoPromedio(2400, 1800))
console.log(carrera.listarPodio(carrera.generarTanda(2400, 1800)))
