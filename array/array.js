console.log(typeof Array, typeof new Array)

let aprovados = new Array('Bia', 'Ana', 'Amanda')

console.log(aprovados)

aprovados = ['bia', 'amanda', 'ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('fabio')
console.log(aprovados.length)

console.log(aprovados[8] === null); //estritamente igual a nulo
console.log(aprovados[8] == null); // o valor é nulo
console.log(aprovados[8] === undefined); // estritamente igual a undefined
console.log(aprovados.length);
console.log(aprovados);

aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados.splice(1, 0, 'El1','El2') // função que adiciona e deleta elementos
console.log(aprovados);