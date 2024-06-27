const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop() // retorna o ultimo elemento do array
console.log(pilots)

pilots.push('Verstappen') // adiciona no ultimo elemento do array
console.log(pilots)

pilots.shift() // retorna o primeiro elemento do array
console.log(pilots)

pilots.unshift('Hamilton') // adiciona no primeiro elemento do array
console.log(pilots)

pilots.splice(2, 0, 'Bottas', 'Massa') // adiciona
console.log(pilots)

pilots.splice(3, 1) // remove
console.log(pilots)

const pilotos1 = pilots.slice(1) // slice gera um novo array
console.log(pilotos1)

const pilotos2 = pilots.slice(1, 4)
console.log(pilotos2)

