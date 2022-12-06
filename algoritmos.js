//Algoritmo condicional

let cantidadProductos = Math.random() > 0.5;

if(cantidadProductos) {
    let medioDePago = prompt("Desea pagar con: MercadoPago, TarjetaDebito, TarjetaCredito");
    if(medioDePago == "MercadoPago") {
        alert("Usted realizo el pago con MercadoPago");
    }else if(medioDePago == "TarjetaDebito") {
        alert("Usted realizo el pago con TarjetaDebito");
    }else if(medioDePago == "TarjetaCredito") {
        alert("Usted realizo el pago con TarjetaCredito");
    }else {
        alert("Medio de pago incorrecto");
    }
}else {
    alert("Ups! No se ha podido realizar la compra ya que no tenes productos en tu carrito")
}


//Algoritmo con ciclos

let agregarAlCarrito = true;
let precioFinal = 0;

while(agregarAlCarrito) {
    let precio = parseInt(prompt("Agregar precio al carrito, si no queres agregar mas escribir 0"));
        if(precio == 0) {
            break;
        }else {
            precioFinal = precioFinal + precio;
        }
}

alert("El precio final es: $" + precioFinal);



