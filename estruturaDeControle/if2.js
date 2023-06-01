function teste1(num) {
    if (num > 7)
        console.log(num) //sem chaves executa só a linha

    console.log('Final')
}

teste1(8)
teste1(6)

function teste2(num) {
    if (num > 7); { //; "finaliza" o bloco e passa reto
        console.log(num);
    }
}

teste2(8)
teste2(6)