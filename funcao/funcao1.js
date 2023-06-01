//Criação de forma literal
function fun1() {}

//Armazenamento dentro de uma variável
const fun2 = function() {}

//Armazenamento dentro de um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(`Função executada pelo array = ${array[0](2, 1)}`);

//Armazenamento dentro de um objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(`Função dentro do Obj = ${obj.falar()}`);

//Função como parâmetro
function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(2)
const cincoMais = soma(2, 3)
cincoMais(3)

//Testes
const teste1 = function(a, b) {
    return a + b
}

const teste2 = function(teste1, b = 1) {
    return teste1 + b
}

console.log(`Resultado do teste = ${teste2(teste1(2,4), 3)}`);

