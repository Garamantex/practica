function calcularPrecioTotal(numArticulos, precioUnitario) {
    let precioTotal = numArticulos * precioUnitario;
    let descuento = 0;

    if (numArticulos > 10 && precioUnitario > 40) {
        descuento = precioTotal * 0.15;
    }

    return precioTotal - descuento;
}


const numArticulos = 20;
const precioUnitario = 10;
const precioFinal = calcularPrecioTotal(numArticulos, precioUnitario);
console.log("El precio final a pagar es: $" + precioFinal);
