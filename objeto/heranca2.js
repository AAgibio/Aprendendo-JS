// Cadeida de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' //Não recomendado

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'} 
const filho = { __proto__:pai, attr3: 'C'}
console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)
console.log(filho.attr3) //O resultado é o atribuito filho pois ele foi o primeiro a ser encontrado na busca

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //Super utilizado para invocação da função do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

//Tanto o médoto 'setPrototypeOf' quanto __proto__ são usados para assimilar protótipo ao objeto.