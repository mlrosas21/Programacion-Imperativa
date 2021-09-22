const fs = require('fs');

const jsonHelper = {
    leerJson: function (nombreArchivo) {
    return JSON.parse(fs.readFileSync(nombreArchivo, 'utf-8'))
},
    escribirJson: function (nombreArchivo, datos) {
    return fs.writeFileSync(nombreArchivo, datos)
},
}

module.exports = jsonHelper