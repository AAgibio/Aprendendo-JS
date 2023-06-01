/*
ENUNCIADO

Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.

*/

const getMath = function () {
    
    this.divide = function (a, b) {
        this.resultado = a / b
        console.log(`Divisão: ${this.resultado}`)

    }

    this.soma = function (a, b) {
        this.resultado = a + b
        console.log(`Soma: ${this.resultado}`)
        
    }
    
    this.subtrai = function (a, b) {
        this.resultado = 0

        if (b > a) {
            this.resultado = b - a
        } else {
            this.resultado = a - b
        }
        console.log(`Subtração: ${this.resultado}`)

    }
    
    this.multiplica = function (a, b) {
        this.resultado = a * b
        console.log(`Multiplicação: ${this.resultado}`);
    }

}

const operacao = new getMath()

operacao.divide(10, 2)
operacao.soma(10, 2)
operacao.subtrai(1, 2)
operacao.multiplica(10, 2)