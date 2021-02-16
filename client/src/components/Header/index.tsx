import React from 'react'
import * as S from './style'
import Container from '../Container'
import Logo from '../../assets/images/pokebola.svg'
import Pokedex from '../../assets/images/pokedex.svg'
import Search from '../Search'
import { Link } from 'react-router-dom'
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <S.BoxHeader>
      <S.Logo>
        <img src={Logo} alt="imagem da pookebola" />
        <p>Olá, Lucas Soares</p>
      </S.Logo>

      <Search />
      <S.Pokedex>
        <Link to="/myPokedex">
          <img src={Pokedex} alt="Iamgem da Pokedex" />
        </Link>
      </S.Pokedex>
    </S.BoxHeader>
  )
}

export default Header
