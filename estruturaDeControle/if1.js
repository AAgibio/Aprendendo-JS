function soBoaNotica(nota) {
    if(nota >= 7) {
        console.log(nota + ' Parabéns!')
    }
}

soBoaNotica(8.1)
soBoaNotica(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade......' + valor)
    }
}

seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo()
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo(['1', '1'])
seForVerdadeEuFalo(-1)
''
