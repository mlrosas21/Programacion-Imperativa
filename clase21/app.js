let archivos = require('./lecturaEscritura')

let arrayDepartamentos = archivos.leerJson('departamentos')

let inmobiliaria = {
    departamentos: arrayDepartamentos,
    listarDepartamentos: function(array) {
        array.forEach(departamento => {
            console.log(`
                ID: ${departamento.id}
                Precio de Alquiler: $ ${departamento.precioAlquiler}
                Disponible: ${departamento.disponible === true ? 'Disponible' : 'No Disponible'}
                Ambientes: ${departamento.ambientes}
                `)
                
        });
    },
    buscarPorId: function(array, id) {
        let departamentoEncontrado = array.find(departamento => departamento.id === id)
        console.log(departamentoEncontrado)
    },
    departamentosNoDisponibles: function(array) {
        let departamentosEncontrados = array.filter(departamento => departamento.disponible === false)
        return departamentosEncontrados
    },
    departamentosDisponibles: function(array) {
        let departamentosEncontrados = array.filter(departamento => departamento.disponible === true)
        return departamentosEncontrados
    },
    filtrarPorAmbientes: function(array, ambientes) {
        let departamentosFiltrados = array.filter(departamento => departamento.ambientes >= ambientes)
        return departamentosFiltrados
    },
    filtrarPorPrecio: function(array, precio) {
        let departamentosFiltrados = array.filter(departamento => departamento.precioAlquiler <= precio)
        return departamentosFiltrados
    },
    rebajarPrecioAlquiler: function(array, rebaja) { 
        this.departamentosDisponibles(array).forEach(elem=>elem.precioAlquiler=elem.precioAlquiler*(1-(rebaja/100)))
        archivos.escribirJson('departamentos2',this.departamentos)
    },
    
    calcularRecaudacion: function(array){
        let recaudacion = this.departamentosNoDisponibles(array).reduce((acum,departamento) => acum + departamento.precioAlquiler, 0)
        return recaudacion
    },
    ordenarPorPrecio: function(array) {
        let arrayOrdenado = array.sort((a,b) => a.precioAlquiler - b.precioAlquiler)
        return arrayOrdenado
    }


}


console.log(inmobiliaria.departamentos)
console.log(inmobiliaria.listarDepartamentos(arrayDepartamentos))
console.log(inmobiliaria.buscarPorId(arrayDepartamentos, 14))
console.log(inmobiliaria.departamentosNoDisponibles(arrayDepartamentos))
console.log(inmobiliaria.departamentosDisponibles(arrayDepartamentos))
console.log(inmobiliaria.filtrarPorAmbientes(arrayDepartamentos, 3))
console.log(inmobiliaria.filtrarPorPrecio(arrayDepartamentos, 22000))
inmobiliaria.rebajarPrecioAlquiler(arrayDepartamentos, 1)
console.log(inmobiliaria.calcularRecaudacion(arrayDepartamentos))
console.log(inmobiliaria.ordenarPorPrecio(arrayDepartamentos))