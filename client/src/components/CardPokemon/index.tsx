import React from 'react'
import Poke from '../../assets/images/poke.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { pokemonType } from '../../services/graphql/api/types/pokemon'

type propsCard = {
  pokemon: pokemonType
}
const CardPokemon: React.FC<propsCard> = props => {
  const { pokemon } = props
  //  console.log(pokemon)
  return (
    <S.Card>
      <S.TitleCard>{pokemon.name}</S.TitleCard>
      <S.ArticleCard>
        <S.FigureCard src={`${pokemon.image}`} />
        <S.BadgeCard>FIRE</S.BadgeCard>
      </S.ArticleCard>
      <S.FooterCard>
        <Link to="/pokemon">
          <S.FooterButton>VISUALIZAR</S.FooterButton>
        </Link>
      </S.FooterCard>
    </S.Card>
  )
}

export default CardPokemon
