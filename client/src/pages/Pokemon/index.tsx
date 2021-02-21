import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Container from '../../components/Container'
import DetailPokemon from '../../components/DetailPokemon'

const Pokedex: React.FC = () => {
  const { name } = useParams<{ name: string }>()

  return (
    <>
      <Header notSearch={false} />
      <Container>
        <DetailPokemon name={name} />
      </Container>
    </>
  )
}

export default Pokedex
