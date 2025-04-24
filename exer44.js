function contarParesImpares(lista) {
    let pares = 0;
    let impares = 0;
    for (let numero of lista) {
        if (numero % 2 == 0) {
            pares += 1;
        }
        else {
            impares += 1;
        }
    }
    return `pares: ${pares}, impares: ${impares}`
}

console.log(contarParesImpares([1, 2, 3, 4, 5, 6, 7]));

