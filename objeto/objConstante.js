const pessoa = { nome: 'joao' }
pessoa.nome = 'Pedro'

// Tornar o Objeto constante
Object.freeze(pessoa)

pessoa.nome = 'Maria'

console.log(pessoa.nome);

const pessoaConstante = Object.freeze({ nome: ' Joao' })
console.log(pessoaConstante.nome);