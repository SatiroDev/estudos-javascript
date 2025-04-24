function removerNulos(lista) {
    let sem_null = [];
    for (let element of lista) {
        if (element != null) {
            sem_null.push(element);
        }
    }
    return sem_null;
}
console.log(removerNulos([1, null, 'teste', null, 5]));