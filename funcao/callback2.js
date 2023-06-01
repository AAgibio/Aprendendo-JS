const notas = [7.3, 2.3, 3.2, 4.1, 9.8]

//Sem callback

let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7 ) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
const notasBaixas1 = notas.filter(nota => nota < 7)
console.log(notasBaixas1)

const notasAltas = notas.filter(nota => nota > 7)
console.log(notasAltas)