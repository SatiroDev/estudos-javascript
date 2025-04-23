function fibonacci(num) {
    let atuali = 0
    let atual = 1
    for (let i = 1; i <= num; i ++) {
        atualizacao = atuali + atual
        console.log(atualizacao)
        atual = atuali
        atuali = atualizacao
        }       
}
fibonacci(7)