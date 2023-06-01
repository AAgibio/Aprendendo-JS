function Pessoa() {
    this.idade = 0

    const self = this
   
    setInterval(function() {
        self.idade++
        console.log(`Idade: ${self.idade}`);
    }, 1000)
    
}   
new Pessoa


function Cronometro() {
    this.temp = 0
    
    setInterval(function() {
        this.temp++
        console.log(`Cronometro: ${this.temp}`);
    }.bind(this), 1000)
}

new Cronometro