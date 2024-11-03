function fetchPokemon() {
    const nombrePokemon = document
    .getElementById("pokemon-name")
    .Value.toLocaleLowerCase();

    if (nombrePokemon === "") {
        alert ("por favor, ingresa el nombre del pokemón");
        return;
    }
fetch (`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

    .then((res)=>{
        if (!res.ok) {
            throw new Error("porkemon no encontrado");
        }
        return res.json();
    })
    .then((data) => displayPokemon(data))
    .then((data) =>
        displayPokemon(data).catch((error)=>
        console.error("error atrapando el pokemon: ",error)
    )
);
}
 function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById("pokemon-info");
    pokemonInfo.innerHTML = 
    <p><img src="${pokemon.sprites.front_default}" alt="${pokeon.name"></img> </p>
 }git commint 