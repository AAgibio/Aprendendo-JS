const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '01.01.2020'
})

pessoa.dataDeNascimento = '01.01.2019'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3 }
const obj = Object.assign(dest, o1, o2) //Concatenar Objetos
console.log(obj)