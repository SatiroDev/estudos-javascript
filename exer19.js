let palavra = 'radar'
let inverso = palavra.split('').reverse().join('')
if (palavra == inverso) {
    console.log(`a palavra ${palavra} é um palíndromo`)
}
else {
    console.log(`a palavra ${palavra} não é um palíndromo`)
}