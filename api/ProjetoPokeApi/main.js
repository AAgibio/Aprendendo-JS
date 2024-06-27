const urlBase = "https://pokeapi.co/api/v2/evolution-chain/"
const id = 23

const getPKM = function(url) {
    return fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.chain.evolves_to))
    .catch(err => console.log('Erro na solicitação: ', err))
}

//getPKM(urlBase + id)

console.log(typeof(null))