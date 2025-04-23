let vogais = "aeiou";
let frase = "O JavaScript é uma linguagem incrível!".toLowerCase();
let contagem_vogais = 0;
for (i in frase) {
    if (i in vogais) {
        contagem_vogais += 1
    }
}
console.log(`número de vogais: ${contagem_vogais}`)