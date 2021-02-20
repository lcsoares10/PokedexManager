function searchPokemon(pokemons: any, search: any) {
  return pokemons.filter((pokemon: any) => {
    return pokemon.name.indexOf(search) !== -1
  })
}
export default searchPokemon
