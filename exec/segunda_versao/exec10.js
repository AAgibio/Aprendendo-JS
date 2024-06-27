const primeiroEUltimo = function(ele) {
    let resultado = []
    primeiro = pri => {
        let p = pri.shift()
        resultado.push(p)
    }

    ultimo = ult => {
        let u = ult.pop()
        resultado.push(u)
    }
    primeiro(ele)
    ultimo(ele)
    return console.log(resultado)
}

primeiroEUltimo([7, 14, "olá"])
primeiroEUltimo([-100, "aplicativo", 16])

const primeiroEUltimo1 = function(ele) {
    
    const p = ele.shift()
    const u = ele.pop()
    
    return [p, u]
}

console.log(primeiroEUltimo1([7, 14, "olá"]))
