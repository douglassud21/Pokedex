
const pokeApi = { }

pokeApi.getPokemons = (offset = 0, limit = 10) => {     //Chamada da API.
    
    const url = `https://pokeapi.co/api/v2/pokemon?ofset=${offset}&limit=${limit}`
    return fetch(url)
    .then  ((response) => response.json())
    .then  ((jsonBody) => jsonBody.results)
    .catch ((error) => console.log (error))

}