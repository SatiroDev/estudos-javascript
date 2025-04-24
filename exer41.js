let array = ['José', 'Rayssa', 'Zenaide', 'Cravo'];
let contagem = 0;
for (let nome of array) {
    if (nome.length > 5) {
        console.log(nome);
        contagem += 1;
    }
}
console.log(`${contagem} elementos com mais de 5 letras`);