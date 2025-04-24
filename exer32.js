let comando = 'REINICIAR'.toLowerCase();
switch (comando) {
    case 'iniciar':
        console.log('Iniciando');
        break;
    case 'pausar':
        console.log('Pause');
        break;
    case 'parar':
        console.log('parando');
        break;
    case 'reiniciar':
        console.log('reiniciando');
        break;
    default:
        console.log('erro');
        break;
}