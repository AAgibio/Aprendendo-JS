function tratarErroELancar (erro) {
    //throw new Error('..')
    //throw 10
    //throw true
    //throw 'mensagem'
}

function imprimirNomeGritante (ibf){
    try {
        console.log(obj.name.toUpperCase() + '!!!')       
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Finalmente')
    }
}
//const obj = { name: 'Rodrigo' }
//mprimirNomeGritante(obj)

console.log(typeof Error)