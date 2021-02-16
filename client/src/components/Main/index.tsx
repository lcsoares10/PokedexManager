import React from 'react'
import Container from '../Container'
import Title from '../Title'
import * as S from './style'
const Main: React.FC = () => {
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
          <div>
            <div>Pikachu</div>
            <div>Charizard</div>
            <div>Gengar</div>
          </div>
        </S.Section>
      </S.Main>
    </Container>
  )
}

export default Main
