//Factory é uma função que retorna um objeto
function criarProduto(nome= String, preco= Number) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('prod1', 10))