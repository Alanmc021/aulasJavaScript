var meuCarro = new Object()
// meuCarro.fabricacao = 'Ford'
// meuCarro.modelo = "Mustang"
// meuCarro.ano = 1970
meuCarro['kmRodados'] = 1000
//console.log(meuCarro);

const perfil = {
    nome: 'alan',
    urlAvatar: 'www.teste.com.br/avatar.png',
    likes: 10,
    endereco: {
        rua: 'rua nova',
        numeroCasa: 200,
        contatos: {
            telefone01: 222222,
            telefone02: 33333,
            telefone04: "444444"
        }
    }
}

//console.log(perfil.likes);

//console.log(perfil.endereco.contatos.telefone01);


function Carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

var novoCarro = new Carro("Chevetola", "Novo", 1990)

console.log(novoCarro);