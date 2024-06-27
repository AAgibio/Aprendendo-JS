const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 24, fragil: true },
    { nome: 'Copo de Plastico', preco: 12.99, fragil: false }
]

console.log(produtos.filter(function(p){
    return false
}))

//Minha resolução
const retornaMaiorFragil = function(ele) {
    if (ele.preco > 500 && ele.fragil == true) {
        return ele
    }
}
let resultado = produtos.filter(retornaMaiorFragil)
console.log(resultado);

//Resolução aula
const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))