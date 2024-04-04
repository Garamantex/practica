let medioTransporte = prompt("¿Cómo vas a viajar? (coche, tren, bicicleta o autobús)");

if (medioTransporte === "tren" || medioTransporte === "autobús") {
    console.log("Recuerda llevar dinero para el billete.");
} else if (medioTransporte === "coche") {
    console.log("¡Buen viaje en coche!");
} else if (medioTransporte === "bicicleta") {
    console.log("¡Que disfrutes tu viaje en bicicleta!");
} else {
    console.log("No has especificado un medio de transporte válido.");
}
