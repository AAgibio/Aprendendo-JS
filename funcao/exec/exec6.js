/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos. 
*/

const getJurosSimples = function() {
    
    this.montante = function(capitalInicial, taxaJuros, tempoAplicacao) {
        const jurosSimples = capitalInicial * (taxaJuros / 100) * tempoAplicacao
        console.log(jurosSimples + capitalInicial);
    }

    this.emprestimo = function(capitalInicial, taxaJuros, tempoAplicacao) {
        const jurosSimples = capitalInicial * (taxaJuros / 100) * tempoAplicacao
        console.log(jurosSimples);
    }
}

const getJurosCompostos = function() {
    
    this.montante = function(capitalInicial, taxaJuros, tempoAplicacao) {
        const jurosCompostos = capitalInicial * ((taxaJuros + 1) / 100) * tempoAplicacao
        console.log(jurosCompostos + capitalInicial);
    }

    this.emprestimo = function(capitalInicial, taxaJuros, tempoAplicacao) {
        const jurosCompostos = capitalInicial * ((taxaJuros + 1) / 100) ** tempoAplicacao
        console.log(jurosCompostos.toFixed(2));
    }
}

const calculaJurosSimples = new getJurosSimples()
const calculaJurosCompostos = new getJurosCompostos()

calculaJurosSimples.montante(900, 5, 6)
calculaJurosSimples.emprestimo(900, 5, 6)
calculaJurosCompostos.montante(50000, 12, 2)
calculaJurosCompostos.emprestimo(50000, 12, 2)