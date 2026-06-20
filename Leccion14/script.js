
/*console.log(multiplicar(5,5));
function multiplicar(a, b){
    return a * b;
}

const multiplicacion = function(a,b){
    return a * b;
}
console.log(multiplicacion(5,5));

const dividir = (a,b) => {
    return a/b;
}
console.log(dividir(10,2));


const productos=[
    { id:1 , nombre: 'Laptop'},
    { id:2 , nombre: 'Impresora'},
    { id:3 , nombre: 'Mouse'},
    { id:4 , nombre: 'Teclado'},
]
console.log(productos);
const valorAbuscar = 'Mouse';

setTimeout(() => {
    const buscarProducto = productos.find(x => x.nombre == valorAbuscar);
        if(buscarProducto == undefined || buscarProducto == null){
            console.log("No se encontro el producto");
        }else{
            console.log("Producto Encontrado");
        }
}, 2000);



let promesaPizza = new Promise((resolve , reject) => {
    let todoBien = false;
    if(todoBien){
      resolve("Todo bien con la pizza");
    }else{
      reject("Algo salió mal en la preparación con la pizza");
    }
})

promesaPizza.then(respuesta => console.log(respuesta)).catch(error => console.log(error));
*/
// http://cine.runasp.net/api/Actores

let titulo = document.getElementById("titulo");
console.log(titulo.innerHTML);

let parrafo = document.getElementById("parrafo");

fetch('http://cine.runasp.net/api/Actores').then(response => response.json()).then(respuesta => {
    parrafo.innerHTML = JSON.stringify(respuesta);
}).catch(error => console.log(error));


