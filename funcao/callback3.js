// Exemplo de callbacks no browser 
let i = 0

document.getElementsByTagName('body')[0].onclick = function(e) {
    i++
    console.log(`O evento aconteceu ${i} vezes`)
}
