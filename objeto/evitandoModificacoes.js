//Object.preventExtensions = consegue excluir, modificar, mas não incluir.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tags: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tags
console.log(produto)

//Object.seal = consegue modificar os dados, mas não excluir, nem incluir.
const pessoa = { nome: 'Juliana', idade: 40 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = não consegue mudar nada
const carro = { nome: 'Volvo', velMax: 200}
Object.freeze(carro)
delete carro.nome
carro.velMax = 150
console.log(carro)