const obj = { a: 1, b: 2}

const removerPropriedade = function(obj, prop) {
    const copia = Object.assign({}, obj)
    delete copia[prop]

    return console.log(copia);
}
removerPropriedade(obj, "b")
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido" 
}, "descricao")