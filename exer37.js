// function multiplicarPorDois(lista) {
//     let mutiplicados = [];
//     for (let numero of lista) {
//         let mutiplicacao = numero * 2;
//         mutiplicados.push(mutiplicacao);
//     }  
//     return mutiplicados;
// }
// console.log(multiplicarPorDois([1, 2, 3, 4, 5, 6]))

function multiplicarPorDois(lista) {
    for (let numero of lista) {
        let mutiplicacao = numero * 2;
        console.log(mutiplicacao);
    }  

}
multiplicarPorDois([1, 2, 3, 4, 5, 6])