let nome = "Alan"
let numero = 10
console.log(nome);

setTimeout(()=>{
    console.log('Executou depois');
} , 5000)

setTimeout(()=>{
    console.log('Executou depois de novo');
} ,10000)


console.log(numero);