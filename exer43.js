function melhorAluno(lista) {
    melhor = [];
    let maior_nota = 0;
    for (let aluno of lista) {
        if (aluno['nota'] > maior_nota) {
            maior_nota = aluno['nota'];
        }
    }
    for (let aluno of lista) {
        if (aluno['nota'] == maior_nota) {
            melhor.push(aluno['nome']);
        }
    }
    return melhor
}
let alunos = [
    {nome: 'João', nota: 9},
    {nome: 'Maria', nota: 5},
    {nome: 'José', nota: 9},
    {nome: 'Clara', nota: 6}
];

console.log(melhorAluno(alunos));