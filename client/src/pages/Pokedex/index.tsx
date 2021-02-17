import React from 'react'

import Header from '../../components/Header'
import HeroPokedex from '../../components/HeroPokedex'
import Main from '../../components/Main'

const Pokedex: React.FC = () => {
  return (
    <>
      <Header />
      <HeroPokedex />
      <Main />
    </>
  )
}

export default Pokedex
