import React from 'react'
import Container from '../Container'
import Title from '../Title'
import * as S from './style'
import ListPokemons from '../ListPokemons'
import client from '../../services/graphql/client'
import useSWR from 'swr'
import { RequestDocument } from 'graphql-request/dist/types'
import GET_ALL_POKEMONS from '../../services/graphql/queries/getAllpokemons'

const Main: React.FC = () => {
  const fetcher = (query: RequestDocument) =>
    client.request(query, { limit: 10 })

  const { data, error } = useSWR(GET_ALL_POKEMONS, fetcher)

  return (
    <Container>
      <S.Main>
        <S.HeaderMain>
          <Title>Pokémons encontrados</Title>
          <S.Filter>
            <p>Filtrar por tipo</p>
            <S.SelectFilter>
              <S.Option value="">1</S.Option>
              <S.Option value="">2</S.Option>
            </S.SelectFilter>
          </S.Filter>
        </S.HeaderMain>
        <S.Section>
          <ListPokemons />
        </S.Section>
      </S.Main>
    </Container>
  )
}

export default Main
