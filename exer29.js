let usuario1 = {
    nome: 'João Silva',
    idade: 60,
};

let usuario2 = {
    nome: 'José Satiro',
    idade: 17,
};

let usuario3 = {
    nome: 'Maria',
    idade: 10,
};

let id = 0;
let geral = [usuario1, usuario2, usuario3]
for (let usuario of geral) {
    usuario['ID'] = id
    id += 1
}
for (let usuario of geral) {
    if (usuario['nome'] != '' && usuario['idade'] > 18) {
        console.log(`Nome: ${usuario['nome']}, ID: ${usuario['ID']}`)
        console.log('cadastro aprovado')
    }
    else{
        console.log(`Nome: ${usuario['nome']}, ID: ${usuario['ID']}`)
        console.log('cadastro negado')
    }
    console.log()
}