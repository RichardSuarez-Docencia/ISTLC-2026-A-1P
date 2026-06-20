
console.log("Inicializando....");


let usuario = "juan3";
let password = "1234";

if(usuario == "juan" && password == "1234"){
    console.log("Bienvenido al Sistema");
}else{
    console.log("USUARIO o PASSWORD INCORRECTO");
}


let diasDeLaSemana = 100;

switch (diasDeLaSemana) {
    case 1:
        console.log("Lunes");
    break;
    case 2:
        console.log("Martes");
    break;
    case 3:
        console.log("Miercoles");
    break;
    case 4:
        console.log("Jueves");
    break;
    case 5:
        console.log("Viernes");
    break;
    case 6:
        console.log("Sabado");
    break;
    case 7:
        console.log("Domingo");
    break;

    default:
        console.log("Dia no corresponde a los 7 dias de la semana");
        break;
}

let arregloNotas = [7,7,8,9,10];
arregloNotas.push(5);
arregloNotas.push(6);
console.log(arregloNotas);
arregloNotas.pop();
console.log(arregloNotas);
arregloNotas.shift();
console.log(arregloNotas);

arregloNotas.splice(0,2);
console.log(arregloNotas);


let arregloNombres = ["Juan", "Patricio", "Felipe"]
console.log(arregloNombres[1]);

let arregloPersonas = [
    { nombre: 'Federico', apellido: 'Perez', edad: 25 },
    { nombre: 'Pluas', apellido: 'Anderson', edad: 9 },
    { nombre: 'Bruno', apellido: 'Suarez', edad: 47 },
    { nombre: 'Maria', apellido: 'Gomez', edad: 14 },
]
arregloPersonas.push(
    { nombre: 'Javier', apellido: 'Espinel', edad: 20 }
);
console.log(arregloPersonas);
console.log(arregloPersonas[3].nombre);
console.log(arregloPersonas[3].apellido);
console.log(arregloPersonas[3].edad);


console.log(arregloPersonas);
arregloPersonas.splice(3,2);
console.log(arregloPersonas);


arregloPersonas.forEach(personas => {
    console.log(personas);
});