// let lista = [5, 12, 3, 21, 9];
// let maior = 0
// for (i in lista) {
//     if (lista[i] >= maior) {
//         maior = lista[i]
//     }
// }
// console.log(`o maior número é ${maior}`)

// outra maneira
let lista = [5, 12, 3, 21, 9];
let maior = 0
for (let num of lista) {
    if (num >= maior) {
        maior = num
    }
}

console.log(`o maior número é ${maior}`)