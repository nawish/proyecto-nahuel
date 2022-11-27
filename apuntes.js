// string son cadenas de texto
// los numeros sin comillas se leen como numeros (number)
// los booleanos pueden ser true or false unicamente
// variables constantes van con mayuscula
// la variable let puede estar declarada sin datos, const debe estar declarada con sus datos
// else if 
// && and || or 
// if(condicional){
//     console.log(algo)
// }else {
//     console.log(algomas)
// }


let nombre = prompt('Ingresá tu nombre')
let apellido = prompt('Ingresá tu apellido')
let edad = prompt('Ingresá tu edad')

alert('Bienvenidx ' + nombre + ' ' + apellido + ' tenés' + ' ' + edad + ' años')

let producto = 1000
let efectivo = parseInt(prompt('¿Cuánto dinero tenés?'))
let credito = 200
let disponible = efectivo + credito 

if(disponible >= producto) {
    alert('Podés comprar')
}else {
    alert('No podés comprar')
}