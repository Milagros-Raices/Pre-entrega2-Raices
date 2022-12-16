function aplicarImpuestos(precio) {
    let IVA = precio * 0.21;      //IMPUESTO IVA
    if(precio > 20000) {
        precio = precio * 1.15;  //IMPUESTO INGRESOS BRUTO
    } 
    precio = precio + IVA;
    return Math.round(precio);
}   


function buscarTorta(array, nombre) {
    for(let i=0; i<array.length; i++) {
        if(array[i].nombre.toLocaleLowerCase() == nombre) {
            return array[i];
        }
    }
    return null;
}


function agregarAlCarrito(nombreTorta, cantidad) {
    const inventario = [ {nombre: "Pastafrola", precio: 2000 } , {nombre: "CheeseCake", precio: 2500} , {nombre: "Selva Negra", precio: 3000 } , {nombre: "Lemon Pie", precio: 1800 }]

    let precioFinal = 0;
    let torta = buscarTorta(inventario, nombreTorta)

    if(torta){
        precioFinal = aplicarImpuestos(torta.precio * cantidad);
    }else{
        alert("Esta torta no se encuentra disponible!!");
        return;
    }
    
    alert("El precio final es: $" + precioFinal);
}

let nombreTorta = prompt("Escribi el nombre de la torta que queres.").toLocaleLowerCase();
let cantidad = parseInt(prompt("Cantidad de tortas que queres."));

agregarAlCarrito(nombreTorta, cantidad);


