// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto ['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 51,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }, condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 22
    }],
    calcularValorSeguro: function() {

    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av ABC'
console.log(carro);