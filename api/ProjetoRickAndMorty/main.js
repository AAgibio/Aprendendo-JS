//Selecionando os elementos

const characterId = document.getElementById('characterId')
const btnGo = document.getElementById('btn-go')
const content = document.getElementById('content')
const image = document.getElementById('img')
const selectElement = document.getElementById('lista-elements')
const divTeste = document.getElementById('container-teste')

const buton = document.getElementById('buton')

//Url base
const baseUrl = 'https://rickandmortyapi.com/api'

//Função de request da API
const fetchApi = (value) => {
    const result = fetch(`${baseUrl}/character/${value}`)
        .then((res) => res.json())
        .then((data) => {
            return data
        })

    return result
}
//Percorrer o Objeto e realizar a vinculação das chaves com a listagem
const geraOption = async () => {
    const result = await fetchApi(1)

    Object.keys(result).forEach((key) => {
        const element = document.createElement('option')
        element.value = key
        element.textContent = key

        selectElement.appendChild(element)
    })

}
geraOption()

const geraCheckbox = async () => {
    const result = await fetchApi(1)

    Object.keys(result).forEach((key) => {
        const checkboxElement = document.createElement('input')
        checkboxElement.setAttribute('name', key)
        checkboxElement.setAttribute('id', key)
        checkboxElement.setAttribute('type', 'checkbox')

        divTeste.appendChild(checkboxElement)

        const labelElement = document.createElement('label')
        labelElement.setAttribute('for', key)
        labelElement.textContent = key

        divTeste.appendChild(labelElement)       
    })

}
geraCheckbox()



buton.addEventListener('click', () => {
    console.log(divTeste)
    console.log(selectElement)
})




//Adquirindo o valor da listagem
let valorSelecionado

selectElement.addEventListener('change', () => {
    valorSelecionado = selectElement.value
})

//Buscando na URL
btnGo.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchApi(characterId.value)

    if (!valorSelecionado) {
        content.innerText = 'Selecione um valor válido'
    } else {
        content.innerText = `${JSON.stringify(result[valorSelecionado], undefined, 2)}`

        image.src = `${result.image}`
    }

})