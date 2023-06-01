function Carro(velocidadeMaxima = 200, aceleracao = 5) { 
    //Atributo privado
    let velocidadeAtual = 0

    //Metodo público
    this.acelerar = function() {
        if (velocidadeAtual + aceleracao <= velocidadeMaxima) {
            velocidadeAtual += aceleracao
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

for (let i = 0; i < 15; i++) {
    ferrari.acelerar()
    console.log(`Repetição ${i}: ${ferrari.getVelocidadeAtual()}`)
}
