// let numeros = [4, 7, 1, 3, 9];
// let soma = 0
// for (i in numeros) {
//     soma = soma + numeros[i]
// }
// console.log(`a soma dos números é ${soma}`)

// outraa maneira
let numeros = [4, 7, 1, 3, 9];
let soma = 0;
for (let num of numeros) {
    soma += num
}
console.log(`a soma dos números é ${soma}`)