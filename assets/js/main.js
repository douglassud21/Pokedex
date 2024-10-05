
//Chamada da API.

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?ofset=${offset}&limit=${limit}`

function convertPokemonTypesToLi (pokmonTypes) {
    return pokmonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

//Capturando os Pokemons da lista.

function convertPokemonToLi (pokemon) {
    return `
            <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">

                </div>
            </li>
            `
}


//Tratamento da URL .

const pokemonList = document.getElementById ('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml

})