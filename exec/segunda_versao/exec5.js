const maiorOuIgual = function(num1, num2) {
    const maior = num1 >= num2
    const igual = num1 === num2
    return console.log(maior && igual);
}

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)