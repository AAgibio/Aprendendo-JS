const nomeDoMes = function(index) {
    const meses = ['janeiro', 'feveiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    let valida = index > 13 || index <= 0 ? "Mês inválido" : meses[index - 1]
    return console.log(valida)
}
nomeDoMes(1)
nomeDoMes(4)
nomeDoMes(0)