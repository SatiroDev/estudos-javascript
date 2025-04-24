function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}
console.log(calcularMedia(10,5, 7).toFixed(2));