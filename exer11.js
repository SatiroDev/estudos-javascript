let num1 = 5;
let num2 = 3;
let operacao = "Multiplicação".toLowerCase();
if (operacao == 'soma') {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
}
else if (operacao == 'subtração') {
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
}
else if (operacao == 'multiplicação') {
    console.log(`${num1} x ${num2} = ${num1 * num2}`)
}
else if (operacao == 'divisão') {
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
}
else {
    console.log('Operação inválida')
}