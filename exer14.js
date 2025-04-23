// let lista = [5, 3, 8, 1, 2];
// console.log(`Lista ordenada: [${lista.sort()}]`) maneira errada

let lista = [5, 3, 8, 1, 20];
lista.sort((a, b) => a - b);
console.log(`Lista ordenada: [${lista}]`); // maneira certa
