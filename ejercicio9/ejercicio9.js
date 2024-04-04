function determinarGrupo(nombre, sexo) {
    var primerLetra = nombre.toUpperCase().charAt(0);

    if ((sexo === 'mujer' && primerLetra < 'M') || (sexo === 'hombre' && primerLetra > 'N')) {
        return "Grupo A";
    } else {
        return "Grupo B";
    }
}

console.log(determinarGrupo('Ana', 'mujer')); // Grupo A
console.log(determinarGrupo('Pedro', 'hombre')); // Grupo A
console.log(determinarGrupo('Maria', 'mujer')); // Grupo B
console.log(determinarGrupo('Nacho', 'hombre')); // Grupo B