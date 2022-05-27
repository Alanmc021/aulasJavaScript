const numeros = [1, 2, 3, 6, 5, 6, 7]
//console.log(numeros.length);

for (let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i]);
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i] + ' Esse numero é par');
    } else {
        console.log(numeros[i] + ' Esse numero é ímpar');
    }
}