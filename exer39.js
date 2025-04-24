let array = [1, 2, 3, 4, 5, 6, 7];
let array2 = array.filter(function(numero) {
    if (numero % 3 == 0) {
        return numero;
    }
})
console.log(array2)

// let array = [1, 2, 3, 4, 5, 6, 7];
// for (let numero of array) {
//     if (numero % 3 == 0) {
//         console.log(numero);
//     }
// }