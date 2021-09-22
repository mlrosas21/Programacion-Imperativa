

let nombre = 'Martin'

saludar = (nombre, callback) => callback(nombre)

saludar(nombre, esp)
saludar(nombre, eng)
saludar(nombre, br)
saludar(nombre, (param) => console.log(`Hallo ${param}, wie geht es dir heute? `));