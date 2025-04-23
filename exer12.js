let num = 5;
let veri = 0;
for (i = 1; i <= num; i++) {
    if (num % i == 0) {
        veri += 1
    }
}
if (veri == 2) {
    console.log(`o número ${num} é primo`)
}
else {
    console.log(`o número ${num} não é primo`)
}