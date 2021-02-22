import React, { useMemo } from 'react'
import Title from '../Title'
import ChartPie from '../ChartPie'
import MyTypesPokemon from '../../helper/MyTypesPokemon'
import LegendTypesPokemon from '../LegendTypesPokemon'
import { pokemonType } from '../../services/graphql/api/types/pokemon'
import { useSelector } from 'react-redux'
import * as S from './style'

const HeroPokedex: React.FC = () => {
  const pokedex: Array<pokemonType> = useSelector(
    (state: any) => state.pokedexReducer.pokedex
  )

  const types = pokedex.map((pokemon): string => pokemon.types)
  const counts = pokedex.reduce((newArray, item) => {
    const type = item.types
    if (!Object.prototype.hasOwnProperty.call(newArray, type)) {
      newArray[type] = 0
    }
    newArray[type]++
    return newArray
  }, {} as { [key: string]: any })

  const myTypes = Object.keys(counts).map(k => {
    return { name: k, x: counts[k], y: counts[k] }
  })

  const myTypesPokemon = new MyTypesPokemon({ myTypes })
  const backgroundColor = useMemo(() => myTypesPokemon.getColors(), [myTypes])
  const legends = useMemo(() => myTypesPokemon.getUrls(), [myTypes])

  return (
    <S.Hero>
      <Title>POKÉDEX</Title>
      <S.ArticleHero>
        <S.Chart>
          <ChartPie data={myTypes} backgroundColor={backgroundColor} />
        </S.Chart>
        <LegendTypesPokemon legends={legends} />
      </S.ArticleHero>
    </S.Hero>
  )
}

export default HeroPokedex
