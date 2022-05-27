// let obj = { nome: 'Alan', nota: 10 }

let { nome, nota } = { nome: 'Alan', nota: 10 }

let newArray = ["alan", "pedro", "paulo"]
let [primeiroNome, segundoNome] = newArray

//console.log(primeiroNome);

let arrrayNovo = [0, 1, 2, 3, 4, 5, 6]

let [first, second, ...others] = arrrayNovo

console.log(others);