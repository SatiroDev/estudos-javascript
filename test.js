const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomes = [];
let i = 0;

function pergunta () {
    if (i < 4) {
        rl.question('seu nome: ', function(resposta){
            nomes.push(resposta);
            i += 1;
            pergunta();  
        });
    }
    else {
        console.log(`nomes cadastrados: ${nomes}`);
        rl.close();
    }
}
pergunta()