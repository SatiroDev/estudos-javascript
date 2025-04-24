const prompt = require('prompt-sync')();

let nome = prompt('Nome do aluno? ');
let notas = []
for (let i = 1; i <= 3; i++) {
    let nota = prompt(`Nota ${i}: `);
    notas.push(parseFloat(nota));
}
let soma = notas.reduce((acumulador, atual) => acumulador + atual, 0);
let media = soma / 3;
console.log(`Aluno: ${nome}`);
console.log(`Notas: ${notas}`);
console.log(`Média: ${media.toFixed(2)}`);
if (media >= 7) {
    console.log('Situação: Aprovado');
}
else {
    console.log('Situação: Reprovado');
}