function duplicarElementos(lista) {
    let dobro = [];
    for (let numero of lista) {
        dobro.push(numero*2);
    }
    return dobro;
}
console.log(duplicarElementos([1,2,3,4]))