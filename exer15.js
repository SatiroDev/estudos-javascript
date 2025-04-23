
// function fat(num) {
//     let fatorial = 1
//     for (let i = 1; i <= num; i++) {
//         if (true) {
//             let fatoria = fatorial * i
//             fatorial = fatoria
//         }
//     } 
//     console.log(`fatorial de ${num}: ${fatorial}`)
// }
// fat(9)

function fat(num) {
    let fatorial = 1
    for (let i = 1; i <= num;i ++) {
        fatorial *= i;
    }
    console.log(`fatorial de ${num}: ${fatorial}`) // maneira simplificada
}
fat(9)