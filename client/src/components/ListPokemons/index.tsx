import React from 'react'
import styled from 'styled-components'
import Card from '../CardPokemon'

import searchPokemon from '../../helper/searchPokemon'
import { useSearch } from '../../context/Search'
import { pokemonType } from '../../services/graphql/api/types/pokemon'

export const List = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`
type props = {
  pokemons?: Array<pokemonType> | undefined
}

const ListPokemons: React.FC<props> = props => {
  const { search } = useSearch()
  const pokemonsFound =
    props.pokemons === undefined ? searchPokemon(search) : props.pokemons

  console.log(pokemonsFound)
  return (
    <React.Fragment>
      {pokemonsFound && (
        <List>
          {pokemonsFound.map((pokemon: pokemonType, key: any) => (
            <Card key={key} pokemon={pokemon} />
          ))}
        </List>
      )}
    </React.Fragment>
  )
}

export default ListPokemons
