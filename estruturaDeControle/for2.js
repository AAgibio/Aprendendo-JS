const notas = [1.2, 3.2, 5.3]

for (let i in notas) {
    console.log(`nota: ${i}`)
} //Dentro do For retorna o indice do array

for (let i in notas) {
    console.log(`nota: ${notas[i]}`)
} //Dentro do For retorna o conteudo do indice do array

const pessoa = {
    nome : 'Paulo',
    sobrenome : 'Garcia',
    idade : 34,
    peso : 54.5
}

for (let elemento in pessoa) {
    console.log(`${elemento}:  ${pessoa[elemento]}`);
}