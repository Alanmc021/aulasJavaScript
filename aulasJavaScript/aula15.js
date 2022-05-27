const numeros = [1, 2, 3, 4, 5, 6, 7]

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[1] % 2 === 0) {
//         console.log(`Numero pares: ${numeros[i]}`);
//     } else {
//         console.log(`Numero impar: ${numeros[i]}`);
//     }
// }

const res = numeros.map((el) => {
    if (el % 2 === 0) {
        return `Numero pares: ${el}`
    } else {
        return `Numero impar: ${el}`
    }
})
console.log(res);

console.log(typeof(res));