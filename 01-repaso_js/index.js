// var pepe = 'Hola'
// var pepe = 'Chao'
//Porque esto no genera error, es que vamos a dejar de usarlo

// let pepe = 'Hola'
// pepe = 'Chao'

// const pepe = 'nelson.digital@house.com'
// pepe = 'miguel.digita.com'

let pepe = 'Yo soy global'

function miFuncion(){
    let carolina = 'Hola soy Caro'
    console.log(carolina)
}
miFuncion()

//Tipos de datos
// let pepe = 'Hola soy pepe'
// let pepe = ['Manejamos', 'El mismo', 'Tipo de dato']
// let pepe = {
//     nombre: 'Pedro',
//     edad: 23,
//     tomarMate: function () {
//         console.log('Cebame un matienzo')
//     }
// }
//let pepe = 5 //Number
//let pepe = true o false


// function saludar(nombre){
//     return 'Hola ' + nombre + ', como estas?'
// }
//Este es nuestra forma clasica de declarar variables

//let saludar = (nombre) => 'Hola ' + nombre + ', como estas?'
// console.log(saludar('Francisca'))

// let patova = (nombre, edad) => {
//     if(edad > 18){
//         return 'Bienvenido al cheboli ' + nombre
//     } else {
//         return 'A casa ' + nombre
//     }
// }


let patova = (nombre, edad) => {
    let validacion = edad > 18 ? 'Bienvenido al cheboli ' + nombre : 'A casa ' + nombre
    return validacion
}

console.log(patova('Guillermina', 22))

let obj = {
    nombre: 'Pepe',
    apellido: 'Polainas',
    saludar: ()=> 'Hola' + obj.nombre 
}

console.log(obj.saludar())