function determinarGrupo(nombre, sexo) {
    var primerLetra = nombre.toUpperCase().charAt(0);

    if ((sexo === 'mujer' && primerLetra < 'M') || (sexo === 'hombre' && primerLetra > 'N')) {
        return "Grupo A";
    } else {
        return "Grupo B";
    }
}

console.log(determinarGrupo('Ana', 'mujer')); 
console.log(determinarGrupo('Pedro', 'hombre'));
console.log(determinarGrupo('Maria', 'mujer'));
console.log(determinarGrupo('Nacho', 'hombre'));