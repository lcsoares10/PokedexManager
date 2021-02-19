import { type } from 'os'
import typesPokemon, { typePokemon } from '../utils/dictionaryTypePokemon'

type paramsGetTypesColorsPokemons = {
  myTypes: Array<{ name: string; x: string | number; y: number }>
}
class MyTypesPokemon {
  typesMyPokemons: paramsGetTypesColorsPokemons
  types: Array<typePokemon>
  constructor(typesMyPokemon: paramsGetTypesColorsPokemons) {
    this.typesMyPokemons = typesMyPokemon
    this.types = this.setTypes()
  }

  private setTypes(): Array<typePokemon> {
    return this.typesMyPokemons.myTypes.map(type => typesPokemon[type.name])
  }

  getColors(): Array<string> {
    return this.types.map(type => type.color)
  }

  getUrls(): Array<string> {
    return this.types.map(type => type.url)
  }

  getTypes(): Array<typePokemon> {
    return this.types
  }
}

export default MyTypesPokemon
