import React from 'react'

import Header from '../../components/Header'
import HeroPokedex from '../../components/HeroPokedex'
import ListPokemons from '../../components/ListPokemons'
import { pokemonType } from '../../services/graphql/api/types/pokemon'
import { useSelector } from 'react-redux'
import Title from '../../components/Title'
import Container from '../../components/Container'

const Pokedex: React.FC = () => {
  const pokedex: Array<pokemonType> = useSelector(
    (state: any) => state.pokedexReducer.pokedex
  )
  return (
    <>
      <Header />
      <Container>
        <HeroPokedex />

        {pokedex.length !== 0 && (
          <>
            <Title>Seus pokémons</Title>
            <ListPokemons pokemons={pokedex} />
          </>
        )}
        {pokedex.length === 0 && (
          <>
            <Title>Você não possui pokémons</Title>
          </>
        )}
      </Container>
    </>
  )
}

export default Pokedex
