const calculaSalario = function(horasTrabalhadas, valorHoras) {
    let salario = valorHoras * horasTrabalhadas
    
    return console.log(`Salário igual a R$ ${salario}`);
}

calculaSalario(150, 40.5)