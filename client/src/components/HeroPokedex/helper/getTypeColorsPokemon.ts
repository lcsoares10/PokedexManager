import typescolorsPokemon from '../../../enums/colorsTypePokemonEnum'

type paramsGetTypesColorsPokemons = {
  names: Array<string>
}
type typeColors = {
  [key: string]: typescolorsPokemon
}
function getTypesColorsPokemon(
  params: paramsGetTypesColorsPokemons
): Array<string> {
  const typeColors: typeColors = typescolorsPokemon
  const colors = params.names.map(name => {
    return typeColors[name]
  })

  return colors
}

export default getTypesColorsPokemon
