//Cree un programa en el cual mediante la funcion agregarAlCarito voy agregando precios de los productos que voy agregando al carro
//a los cuales se les va deduciendo impuestos y finalmente se devuelve el precio final del carrito.

function aplicarImpuestos(precio) {
    let IVA = precio * 0.21;      //IMPUESTO IVA
    if(precio > 20000) {
        precio = precio * 1.15;  //IMPUESTO INGRESOS BRUTO
    } 
    precio = precio + IVA;
    return Math.round(precio);
}   

function agregarAlCarrito() {
    let precioFinal = 0;
    while(true) {
        let precio = parseInt(prompt("Agregar precio del producto al carrito (0 para dejar de comprar)"))
        if(precio == 0) {
            break;
        }else {
            precioFinal = precioFinal + aplicarImpuestos(precio);
        }
    }
    alert("El precio final es: $" + precioFinal)
}

agregarAlCarrito();


