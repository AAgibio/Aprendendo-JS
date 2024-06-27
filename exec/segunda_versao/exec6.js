const inverso = function(valor) {
    if (typeof valor == "boolean") {
        return false && valor //!valor
    } else if (typeof valor == 'number') {
        return valor * -1 //-valor
    } else {
        return `booleano ou número esperado, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))