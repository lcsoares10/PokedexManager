import React, { useMemo } from 'react'
import Title from '../Title'
import ChartPie from '../ChartPie'
import MyTypesPokemon from '../../helper/MyTypesPokemon'
import LegendTypesPokemon from '../LegendTypesPokemon'

import * as S from './style'

const HeroPokedex: React.FC = () => {
  const myTypes = [
    { name: 'Dragon', x: 1, y: 1 },
    { name: 'Gass', x: 4, y: 4 },
    { name: 'Fire', x: 3, y: 3 },
    { name: 'Fighting', x: 2, y: 2 }
  ]
  const myTypesPokemon = new MyTypesPokemon({ myTypes })
  const backgroundColor = useMemo(() => myTypesPokemon.getColors(), [myTypes])

  return (
    <S.Hero>
      <Title>POKÉDEX</Title>
      <S.ArticleHero>
        <S.Chart>
          <ChartPie data={myTypes} backgroundColor={backgroundColor} />
        </S.Chart>
        <LegendTypesPokemon />
      </S.ArticleHero>
    </S.Hero>
  )
}

export default HeroPokedex
