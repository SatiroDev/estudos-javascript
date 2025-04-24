let array = ['José', 'João', 'Maria', 'Clara'];
let nome = 'maria';
let verificacao = false;
for (let nm of array) {
    if (nome.toLocaleLowerCase() == nm.toLocaleLowerCase()) {
        console.log(`Usuário ${nome} está na lista`);
        verificacao = true;
        break;
    }
}
if (verificacao == false) {
    console.log(`Usuário ${nome} não está na lista`);
}