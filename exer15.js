// let numero = 5;
// var fatorial = 1;
// for (i= 1; i <= numero; i++) {
//     var fatorial = fatorial * i
// }
// console.log(`fatorial de ${numero}: ${fatorial}`)

function fat(num) {
    let fatorial = 1
    for (let i = 1; i <= num; i++) {
        if (true) {
            let fatoria = fatorial * i
            fatorial = fatoria
        }
    } 
    console.log(`fatorial de ${num}: ${fatorial}`)
}
fat(9)