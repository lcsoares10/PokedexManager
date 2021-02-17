import React, { useMemo } from 'react'
import Title from '../Title'
import ChartPie from '../ChartPie'
import getTypeColors from './helper/getTypeColorsPokemon'

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
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const backgroundColor = useMemo(() => getTypeColors({ names: names }), [
    names
  ])

  return (
    <S.Hero>
      <Title>POKÉDEX</Title>
      <S.ArticleHero>
        <S.Chart>
          <ChartPie
            data={data}
            labels={names}
            backgroundColor={backgroundColor}
          />
        </S.Chart>
        <S.Subtitle>
          <S.SubtitleLine>
            <S.SubtitleItem>
              <img src="" alt="" />
              <p>Normal</p>
            </S.SubtitleItem>
          </S.SubtitleLine>
        </S.Subtitle>
      </S.ArticleHero>
    </S.Hero>
  )
}

export default HeroPokedex
