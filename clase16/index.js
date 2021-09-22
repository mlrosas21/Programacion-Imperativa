const jsonHelper = require('./JsonHelper')

const concesionaria = {
    autos: jsonHelper.leerJson('AUTOS.json'),
    agregarAuto: function(marca, modelo, anio, precio, patente) {
         let autoNuevo = {
            marca: marca,
            modelo: modelo,
            anio: anio,
            precio: precio,
            patente: patente,
            vendido: false
         }
         let autosActualizados = this.autos.push(autoNuevo)
         let autosActualizadosJson = JSON.stringify(autosActualizados)
         jsonHelper.escribirJson('AUTOS.JSON', autosActualizadosJson)
    },
    // venderAuto: function (patente) {
    //     for (let i = 0; i < this.autos.length; i++) {
            
    //     }
    // }
}

concesionaria.agregarAuto('Peugeot', 208, 2016, 800000, 'AA080TK')