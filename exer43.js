let alunos = [
    {nome: 'João', nota: 8},
    {nome: 'Maria', nota: 5},
    {nome: 'José', nota: 9},
    {nome: 'Clara', nota: 6}
];
let melhorAluno = '';
let maiorNota = 0;
for (let aluno of alunos) {
    if (aluno['nota'] > maiorNota) {
        melhorAluno = aluno['nome'];
        maiorNota = aluno['nota'];
    }
}

console.log(melhorAluno);