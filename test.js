const prompt = require('prompt-sync')();
for (let i = 0; i <= 3; i++){
    let nome = prompt('Qual seu nome? ');
    console.log(`Olá, ${nome}`);
}