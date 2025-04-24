let pares = 0;
let impares = 0
for (i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        pares += 1
    }
    else {
        impares += 1
    }
}
console.log(`qunatidade de número pares ${pares}`)
console.log(`qunatidade de número ímpares ${impares}`)