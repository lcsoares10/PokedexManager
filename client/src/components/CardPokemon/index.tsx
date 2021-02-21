import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { pokemonType } from '../../services/graphql/api/types/pokemon'

type propsCard = {
  pokemon: pokemonType
}
const CardPokemon: React.FC<propsCard> = props => {
  const { pokemon } = props
  // const [pokemonApi, setPokemonApi] = useState<any>()

  // useEffect(() => {
  //   async function getPokemon() {
  //     const data = await client.request(GET_POKEMONS, { name: pokemon.name })
  //     setPokemonApi({ ...data.pokemon })
  //   }
  //   getPokemon()
  // }, [pokemon.name])

  // console.log(pokemonApi)

  return (
    <S.Card>
      <S.TitleCard>{pokemon.name}</S.TitleCard>
      <S.ArticleCard>
        <S.FigureCard src={`${pokemon.image}`} />
      </S.ArticleCard>
      <S.FooterCard>
        <Link to={`pokemon/${pokemon.name}`}>
          <S.FooterButton>VISUALIZAR</S.FooterButton>
        </Link>
      </S.FooterCard>
    </S.Card>
  )
}

export default CardPokemon
