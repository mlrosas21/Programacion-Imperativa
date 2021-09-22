
const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
let inmobiliaria = {
  datos: departamentos,
  //B
  listarDepartamentos: function (arrayDepartamentos){
    for(let i=0; i<arrayDepartamentos.length;i++){
      
      let id = arrayDepartamentos[i].id // 
      let propietarios = arrayDepartamentos[i].propietarios
      let cantidadHabitacion = arrayDepartamentos[i].cantidadHabitacion
      let disponible = arrayDepartamentos[i].disponible
      let cantidadPersonas = arrayDepartamentos[i].cantidadPersonas
      let precioAlquiler = arrayDepartamentos[i].precioAlquiler
      let estaDisponible = arrayDepartamentos[i].disponible == true ? "está disponible" : "no esta disponible";
      let aceptaMascotas = arrayDepartamentos[i].aceptaMascotas == true ? "acepta mascotas" : "no acepta mascotas";

      console.log("ID: " + id +","+ " precio: " + precioAlquiler + ", " + estaDisponible + ", " + cantidadHabitacion + " ambientes" + ", " + "máximo " + cantidadPersonas + " personas" + ", " + aceptaMascotas + ", " + "propietarios: " + propietarios)
    }
  },
  // C
  departamentosDisponibles: function() {
    let totalDepartamentosDisponibles = []
    for (let i=0;i<this.datos.length; i++) {
      if(this.datos[i].disponible === true) {
        totalDepartamentosDisponibles.push(this.datos[i])
      }
    }
    return totalDepartamentosDisponibles // array de objetos
  },
  // D
  buscarPorId: function(idBuscado) {
    for(i=0;i<this.datos.length; i++) {
      if (idBuscado === this.datos[i].id) {
        return this.datos[i]
      }
    }
  },

// E
  buscarPorPrecio: function(precioFiltro) {
    let departamentosFiltrados = []
    let departamentosDisponibles = this.departamentosDisponibles()
    for(let i=0;i<departamentosDisponibles.length; i++) {
      if (departamentosDisponibles[i].precioAlquiler <= precioFiltro) {
        departamentosFiltrados.push(departamentosDisponibles[i])
      }
    }
    return departamentosFiltrados
  },

// F
  precioConImpuesto: function(impuesto) {
    for(i=0;i<this.datos.length; i++) {
      this.datos[i].precioAlquiler = (this.datos[i].precioAlquiler*(100+impuesto))/100
    }
    return this.datos
  }


// G

}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
inmobiliaria.listarDepartamentos(departamentos);
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
let disponibles = inmobiliaria.departamentosDisponibles()
inmobiliaria.listarDepartamentos(disponibles)
console.log(o);

console.log(v, oo + " D. buscarPorId");
let idEncontrado = inmobiliaria.buscarPorId(10)
console.log(idEncontrado)
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
let filtroPrecio = inmobiliaria.buscarPorPrecio(700)
inmobiliaria.listarDepartamentos(filtroPrecio)
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
let departamentosConImpuestos = inmobiliaria.precioConImpuesto(10)
console.log(departamentosConImpuestos)
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
console.log(o);