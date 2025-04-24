for (i = 1; i <= 20; i++) {
    let verificacao = 0 
    for (y = 1; y <= i; y ++) {
        if (i % y == 0) {
            verificacao += 1
        }
    }
    if (verificacao == 2) {
        console.log(`o número ${i} é primo`);
    }
    else {
        console.log(`o número ${i} não é primo`);
    }
}