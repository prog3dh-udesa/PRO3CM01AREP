var hola = 'mundo'
var hola = 'Pepe'
/*Porque esto no genera error, es que vamos a dejar de utilizar var para declarar variables*/ 

let mundo = 'hola'
// let mundo = 'Esto genera error'
/*Porque esto si genera error, es por lo que vamos a reemplazar el uso de var con let*/
mundo = 'Adicionalmente nos permiten cambiar su valor'
/*Ademas que nos permite reasignar su valor */

const pepe = 'El grillo'
// pepe = 'Las constantes no les podemos cambiar el valor una vez declaradas'
//const pepe ='Esto tambien genera error, porque no se puede reasignar'
/*Las constantes las vamos a utilizar siempre que queramos que un valor no se puede reasignar */

/*SCOPE*/

function miFuncion(){
    const pepe = 'Este es otro scope, por lo cual no genera error'
    let mundo = 'Y como es otro scope, si vuelvo a utilizar let o const con nombres de variables ya declaras, no genera error'
    console.log(pepe)
}

// console.log(pepe)
// miFuncion()

/*TIPOS DE DATOS*/
//let adivinaElTipoDeDato = 5 -> number
// let adivinaElTipoDeDato = 'Que tipo de dato seré' -> String
let adivinaElTipoDeDato = ['Este', 'Que', 'Tipo', 'De dato sera?']

console.log(adivinaElTipoDeDato)
