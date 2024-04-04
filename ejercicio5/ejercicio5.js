function verificarVelocidad(longitud, tiempo) {
    var velocidad = longitud / tiempo;

    if (velocidad >= 40 && velocidad <= 60) {
        return "El conductor pasa la prueba.";
    } else {
        return "El conductor es descalificado.";
    }
}

console.log(verificarVelocidad(100, 4));
console.log(verificarVelocidad(200, 3));