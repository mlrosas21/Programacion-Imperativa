let str = 'un string cualquiera'
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
"123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])



/* Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente. */

let peliculas = ['Star Wars', 'Totoro', 'Rocky', 'Pulp Fiction', 'La vida es bella']
// console.log(peliculas[5])



/* Más tarde, de producción dieron el aviso de que las películas deberían estar
todas en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase(). */

function mayusculas(arrayPeliculas) {
    return arrayPeliculas.join().toUpperCase().split(',')
}

peliculas = mayusculas(peliculas)

peliculas

/* Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
que crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como
parámetros, para poder agregar los elementos contenidos en el segundo array
dentro del primero, y así retornar un solo array con todas las películas como
sus elementos.
Importante: las películas animadas también deberían convertirse a
mayúsculas. */

// let peliculasAnimadas = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite']

// peliculasAnimadas = [mayusculas(peliculasAnimadas[0]), mayusculas(peliculasAnimadas[1]), mayusculas(peliculasAnimadas[2]), mayusculas(peliculasAnimadas[3]), mayusculas(peliculasAnimadas[4])]

// let peliculasCompletas = peliculas.push(peliculasAnimadas)
