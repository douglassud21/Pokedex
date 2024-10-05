
//Chamada da API.

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?ofset=${offset}&limit=${limit}`


//Capturando os Pokemons da lista.

function convertPokemonToLi (pokemon) {
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="/img/bulba-removebg-preview.png" alt="${pokemon.name}">

                </div>
            </li>
            `
}


//Tratamento da URL .

const pokemonList = document.getElementById ('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})