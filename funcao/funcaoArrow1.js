let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//Função arrow com linha única
dobro = a => 2 * a

console.log(dobro(Math.PI));

let ola = function() {
    return 'Ola'
}

//Função arrow com parametros vazios
ola = () => 'Olá'
ola = _ => 'Olá'