//Calcular pagos en cuotas sobre un monto determinado.

let cuotas = 0,
totalCuotas = 0,
precioTotal = 0;

function introducirPrecio (){
    precioTotal = Number(prompt("Ingrese el valor total a cancelar"));
    
    while (precioTotal > 0){
        totalCuotas = calcularCuotas(precioTotal);
        alert (`El total a cancelar es ${totalCuotas} durante los proximos ${cuotas} meses`)
        break;
    }
    if (precioTotal <= 0 || isNaN(precioTotal)){
        alert("No ingreso un valor numerico")
        precioTotal = Number(prompt("Ingrese el valor total a cancelar"));
    }
}

function calcularCuotas (x){
    cuotas = Number (prompt("Ingrese el numero de cuotas"));
        return precioTotal / cuotas;
}

introducirPrecio();




