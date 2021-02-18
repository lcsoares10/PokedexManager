import React, { useMemo } from 'react'
import Title from '../Title'
import ChartPie from '../ChartPie'
import getTypeColors from './helper/getTypeColorsPokemon'
import LegendTypesPokemon from '../LegendTypesPokemon'

import * as S from './style'

const HeroPokedex: React.FC = () => {
  const names = [
    'Normal',
    'Poison',
    'Steel',
    'Ice',
    'Ghost',
    'Electric',
    'Ground',
    'Psychic',
    'Gass',
    'Dragon',
    'Water',
    'Flying',
    'Bug',
    'Ice',
    'Dark',
    'Fire',
    'Rock',
    'Fighting'
  ]
  const myTypes = [
    { name: 'Dragon', x: 1, y: 1 },
    { name: 'Gass', x: 4, y: 4 },
    { name: 'Fire', x: 3, y: 3 },
    { name: 'Fighting', x: 2, y: 2 }
  ]
  const backgroundColor = useMemo(() => getTypeColors({ myTypes: myTypes }), [
    names
  ])

  return (
    <S.Hero>
      <Title>POKÉDEX</Title>
      <S.ArticleHero>
        {' '}
        <S.Chart>
          <ChartPie
            data={myTypes}
            labels={names}
            backgroundColor={backgroundColor}
          />
        </S.Chart>
        <LegendTypesPokemon />
      </S.ArticleHero>
    </S.Hero>
  )
}

export default HeroPokedex
