import typescolorsPokemon from '../../../enums/colorsTypePokemonEnum'

type paramsGetTypesColorsPokemons = {
  myTypes: Array<{ name: string; x: string | number; y: number }>
}
type typeColors = {
  [key: string]: typescolorsPokemon
}
function getTypesColorsPokemon(
  params: paramsGetTypesColorsPokemons
): Array<string> {
  const typeColors: typeColors = typescolorsPokemon
  const colors = params.myTypes.map(type => {
    return typeColors[type.name]
  })

  return colors
}

export default getTypesColorsPokemon
