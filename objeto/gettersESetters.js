const sequencia = {
    _valor: 1, // convenção de uma variavel privada
    get valor() { return this._valor++ },
    set valor(valor){
        if(valor > this._valor) {
            this._valor = valor
        }
    }

}

console.log(sequencia.valor, sequencia.valor);