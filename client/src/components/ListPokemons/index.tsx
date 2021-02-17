import React from 'react'
import styled from 'styled-components'

import Card from '../CardPokemon'

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
  const data = [1, 2, 3, 4]
  return (
    <React.Fragment>
      <List>
        {data.map((pokemon, key) => (
          <Card key={key} />
        ))}
      </List>
    </React.Fragment>
  )
}

export default ListPokemons
