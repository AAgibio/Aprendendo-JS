// Armazenando uma função em uma variavel

const imprimiSome = function (a, b) {
    console.log(a + b)
}

imprimiSome(2, 3)

//Armazenar uma função arrow em uma variavel

const soma = (a, b = 0) => {
    return a + b
}
console.log(soma(2))

//Armazenar uma função arrow simplificada

const sub = (a, b) => console.log(a - b)

sub(1,2)
console.log(sub(2,1))