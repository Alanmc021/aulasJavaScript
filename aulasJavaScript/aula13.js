var frutas = ["Maçã", "Banana"]

frutas.push("Laranja")

console.log(frutas);

frutas.pop()

console.log(frutas);

frutas.shift()

console.log(frutas);

frutas.unshift("Morango")

console.log(frutas);

var copiaDoArray = frutas.slice();

console.log('=====> ' + copiaDoArray);

var pos = copiaDoArray.indexOf("Banana")

console.log("===> " + pos);