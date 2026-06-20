let numero = 1;

while(numero <= 5){
    console.log(numero + "Recorriendo con while");
    numero++;
}

let numero2= 1

do{
    console.log(numero2 + "Recorriendo con do while");
    numero2++;
}while(numero2 <=5);



for(let x=1; x <=5; x++){
    console.log(x + "Recorriendo con For");
}


function sumar (numero1, numero2){
    return numero1 + numero2;
}

console.log(sumar(4,5));

function calculardora(numerA, numeroB, operador){
    switch (operador) {
        case '*':
            return numerA * numeroB;
            break;
        case '/':
            return numerA / numeroB;
            break;
            case '+':
            return numerA + numeroB;
            break;
            case '-':
            return numerA - numeroB;
            break;
    
        default:
            break;
    }
}

console.log(calculardora(5,4,"+"));