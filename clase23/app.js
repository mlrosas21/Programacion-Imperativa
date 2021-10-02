let archivos = require('./jsonHelper')

let arrayBicicletas = archivos.leerJson('bicicletas')

const carrera = {
    bicicletas: arrayBicicletas,
    bicicletasPorTanda: 4,
    listarBicicletas: function(array) {
        array.forEach(e => console.log(`Ciclista: ${e.ciclista}, marca: ${e.marca}, rodado: ${e.rodado}, peso: ${e.peso} kg, largo: ${e.largo} cm, estado: ${e.dopaje === true ? 'habilitado' : 'inhabilitado'}.`))
    },
    ciclistasHabilitados: function() {
        return this.bicicletas.filter(b => b.dopaje == false)
    },
    buscarPorID: function(ID) {
        return this.bicicletas.find(e => e.id == ID)
    },
    filtrarPorPeso: function(peso){
        return this.bicicletas.filter(e => e.peso <= peso)
    }

}

// carrera.listarBicicletas(carrera.ciclistasHabilitados())
// carrera.listarBicicletas([carrera.buscarPorID(2)])
// carrera.listarBicicletas(carrera.filtrarPorPeso(8))