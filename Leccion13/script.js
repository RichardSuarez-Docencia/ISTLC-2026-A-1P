console.log("Mi primer hola mundo en Javascript");

let nombre = "Juan";
let edad = 18;
let soltero = true;

let persona = {
  nombre: 'Federico',
  apellido: 'Perez',
  edad: 25
}
// esto es un comentario de linea

/* comentario de bloque
console.log(typeof persona.nombre);
console.log(typeof persona);
console.log(typeof edad);
console.log(typeof nombre);
console.log(typeof soltero);*/

console.log(typeof persona.nombre);
console.log(typeof persona);
console.log(typeof edad);
console.log(typeof nombre);
console.log(typeof soltero);


function saludar(){
  return "Hola Liceistas";
}

console.log(saludar());

let x;
console.log(typeof x);

let y= null;
console.log(typeof y);


const a = "Juan";
const ab =5

console.log(a);

let nom = "Marcelo";
nom = "Gordillo"
console.log(nom);

var apellidos = "Quijije";
var apellidos = "Felipe"
console.log(apellidos)


let nota = 4;

let mensaje = nota > 5 ? "Aprobado" : "Reprobado";
console.log(mensaje);


let conversionValor = "10"
let conversionValorNumero = 45;
console.log(typeof Number(conversionValor));
console.log(typeof String(conversionValorNumero));
