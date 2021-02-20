import React from 'react'
import styled from 'styled-components'

import Card from '../CardPokemon'
import client from '../../services/graphql/client'
import useSWR from 'swr'
import { RequestDocument } from 'graphql-request/dist/types'
import GET_ALL_POKEMONS from '../../services/graphql/queries/getAllpokemons'
import searchPokemon from '../../utils/searchPokemon'
import { useSearch } from '../../context/Search'

export const List = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`
const ListPokemons: React.FC = () => {
  const { search } = useSearch()
  const fetcher = async (query: RequestDocument) =>
    await client.request(query, { limit: 1500 })

  const { data, error } = useSWR(GET_ALL_POKEMONS, fetcher)
  if (!data) {
    return <p>Aguarde</p>
  }
  const pokemons = { ...data.pokemons }
  const pokemonsFound = searchPokemon(pokemons.results, search)

  return (
    <React.Fragment>
      {pokemonsFound && (
        <List>
          {pokemonsFound.map((pokemon: any, key: any) => (
            <Card key={key} />
          ))}
        </List>
      )}
    </React.Fragment>
  )
}

export default ListPokemons
