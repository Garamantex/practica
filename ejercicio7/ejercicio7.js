function calcularNota(nota1, nota2, nota3) {
    var media = (nota1 + nota2 + nota3) / 3;

    if (media < 5) {
        return "Suspenso";
    } else if (media >= 5 && media < 7) {
        return "Aprobado";
    } else {
        return "Notable";
    }
}

console.log(calcularNota(6, 8, 10)); 
console.log(calcularNota(4, 5, 6)); 
console.log(calcularNota(2, 3, 4));