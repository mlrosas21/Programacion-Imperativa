/* Desde un banco nos contactan para crear una aplicación que pueda facilitar el
manejo de información y las acciones que el mismo necesita. Nuestro tech leader nos
facilita la forma de representar a los usuarios (cuentas bancarias). Cada una de estas
cuentas tiene la siguiente información:
● N.º de cuenta (solo números).
● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
pesos).
● Saldo en pesos (solo la cantidad).
● Titular de la cuenta (nombre completo).
Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:

1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
(cuentas bancarias). */

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

/* 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes”, que estará compuesta de la lista de objetos
obtenidos en el punto anterior. */

/* 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá
un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y
retornar el objeto cliente que corresponda con ese nombre ingresado.
ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”); */

/* 4. Crear otro método llamado depósito, que recibirá dos parámetros, el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener a la
cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo
en pesos. Luego, deberá dar un aviso por la consola con el mensaje “Depósito
realizado, su nuevo saldo es: xxx”. */

/* 5. Crear un último método llamado extracción, que recibirá también dos
parámetros: el titular de cuenta y el monto a extraer. El método debe obtener
la cuenta correspondiente y restar el monto al saldo actual. En caso de que el
resultado sea menor a 0, deberá imprimir un mensaje por la consola de
“Fondos insuficientes”, de lo contrario deberá imprimir “Extracción realizada
correctamente, su nuevo saldo es: xxx”. */

let banco = {
    clientes: arrayCuentas,
    consultarCliente (titular) {
        for (let i=0; i<arrayCuentas.length; i++) {
            if (arrayCuentas[i].titularCuenta === titular) {
                return arrayCuentas[i]
            }
        }
    },
    deposito (titular, dineroDepositado) {
        for (let i=0; i<arrayCuentas.length; i++) {
            let nuevoSaldo
            if (arrayCuentas[i].titularCuenta === titular) {
                nuevoSaldo = arrayCuentas[i].saldoEnPesos + dineroDepositado
                return 'Depósito realizado, su nuevo saldo es: ' + nuevoSaldo
            }
        }
    },
    extraccion(titular,dineroExtraido) {
        for (let i=0; i<arrayCuentas.length; i++) {
            let nuevoSaldo
            if (arrayCuentas[i].titularCuenta === titular) {
                nuevoSaldo = arrayCuentas[i].saldoEnPesos - dineroExtraido
                if (nuevoSaldo < 0) {
                    return 'Fondos insuficientes'
                } else {
                    return 'Extracción realizada correctamente, su nuevo saldo es: ' + nuevoSaldo
                }
            }
        }
    }
}

let clienteEncontrado = banco.consultarCliente('Ramon Connell');

console.log(clienteEncontrado)

let depositoRamon = banco.deposito('Ramon Connell', 25);

console.log(depositoRamon)

let extraccionAnsel = banco.extraccion('Ansel Ardley', 52000)

console.log(extraccionAnsel)


