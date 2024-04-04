const rentaAnual = 30000; 

let tipoImpositivo;

if (rentaAnual < 10000) {
  tipoImpositivo = '5%';
} else if (rentaAnual >= 10000 && rentaAnual < 20000) {
  tipoImpositivo = '15%';
} else if (rentaAnual >= 20000 && rentaAnual < 35000) {
  tipoImpositivo = '20%';
} else if (rentaAnual >= 35000 && rentaAnual < 60000) {
  tipoImpositivo = '30%';
} else {
  tipoImpositivo = '45%';
}


console.log('Tu tipo impositivo es: ' + tipoImpositivo);
