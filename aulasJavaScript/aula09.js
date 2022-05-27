const criptos = [
    { moeda: 'ethereum', valor: 6 },
    { moeda: 'dogCoin', valor: 100 },
    { moeda: 'bitCoin', valor: 4 },
]

const res = criptos.reduce((prevEl, el) => { return prevEl + el.valor }, 0)

console.log(res);