const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let i = 1;
function tester() {
    rl.question('Digite algo: [ou "sair" para encerrar] ',function(resposta) {
        if (resposta.toLocaleLowerCase() == 'sair'){
            console.log('fim do programa')
            rl.close();
        }
        else {
            console.log(resposta);
            tester();
        }
    });
}

tester();