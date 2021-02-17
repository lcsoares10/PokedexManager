import React from 'react'
import Poke from '../../assets/images/poke.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'
// import { Container } from './styles';

const CardPokemon: React.FC = () => {
  return (
    <S.Card>
      <S.TitleCard>Pikachu</S.TitleCard>
      <S.ArticleCard>
        <S.FigureCard src={Poke} />
        <S.BadgeCard>FIRE</S.BadgeCard>
      </S.ArticleCard>
      <S.FooterCard>
        <Link to="/detail_Pokemon">
          <S.FooterButton>VISUALIZAR</S.FooterButton>
        </Link>
      </S.FooterCard>
    </S.Card>
  )
}

export default CardPokemon
