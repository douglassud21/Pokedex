
const pokeApi = { }

pokeApi.getPokemonDetail = (pokemon) => {

    return fetch(pokemon.url)
        .then((response) => response.json())

}

pokeApi.getPokemons = (offset = 0, limit = 10) => {     //Chamada da API.
    
    const url = `https://pokeapi.co/api/v2/pokemon?ofset=${offset}&limit=${limit}`

    return fetch(url)
        .then  ((response) => response.json())
        .then  ((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

