let usuario1 = {
    id: 0,
    nome: 'João Silva',
    idade: 60,
};

let usuario2 = {
    id: 0,
    nome: 'José Satiro',
    idade: 17,
};

let usuario3 = {
    id: 0,
    nome: 'Maria',
    idade: 10,
};

let id = 0;
let geral = [usuario1, usuario2, usuario3]
for (let usuario of geral) {
    usuario['id'] = id
    id += 1
}
for (let usuario of geral) {
    console.log(usuario)
    if (usuario['nome'] != '' && usuario['idade'] > 18) {
        console.log(`Nome: ${usuario['nome']}, id: ${usuario['id']}`)
        console.log('cadastro aprovado')
    }
    else{
        console.log(`Nome: ${usuario['nome']}, id: ${usuario['id']}`)
        console.log('cadastro negado')
    }
    console.log()
}