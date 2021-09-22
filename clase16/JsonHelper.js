/* 1.
Descarga el archivo JSON y guardalo en una carpeta de trabajo donde también
crearás un archivo JS en el que crearemos el módulo de lectura y escritura.
En tu archivo JS requerí el módulo nativo File System para poder trabajar con
sus funcionalidades.

2.
Ahora vamos a realizar nuestra primera función, la de lectura de archivos, ¿que
función del módulo fs podemos utilizar para realizar una lectura sincrónica del
archivo json? crea una función que reciba como parámetro un string con el
nombre del archivo json, realice la lectura y haga un parseo de los datos para
poder utilizarlos como un array de objetos literales. */

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
