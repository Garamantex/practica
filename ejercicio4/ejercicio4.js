function planificarViaje(vehiculo) {
    var medioTransporte = vehiculo;

    switch(medioTransporte) {
        case "coche":
            mensaje = "No olvides revisar la gasolina y el aceite del coche.";
            break;
        case "tren":
        case "autobús":
            mensaje = "No olvides llevar dinero para el billete.";
            break;
        case "bicicleta":
            mensaje = "No olvides llevar tu casco y revisar las llantas.";
            break;
        default:
            mensaje = "Por favor, selecciona un medio de transporte válido.";
            break;
    }

    return mensaje;
}

console.log(planificarViaje("bicicleta"));
console.log(planificarViaje("autobus"));
console.log(planificarViaje("tren"));
console.log(planificarViaje("coche"));
