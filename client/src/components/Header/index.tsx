import React, { useEffect, useState } from 'react'
import * as S from './style'
import Logo from '../../assets/images/pokebola.svg'
import Pokedex from '../../assets/images/pokedex.svg'
import Search from '../Search'
import { Link } from 'react-router-dom'
// import { Container } from './styles';
type propsType = {
  notSearch?: boolean
}

const Header: React.FC<propsType> = props => {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    const name = localStorage.getItem('userName')
    setUserName(name as string)
  }, [userName])

  return (
    <S.BoxHeader>
      <S.Logo>
        <img src={Logo} alt="imagem da pookebola" />
        <p>{`Olá, ${userName}`}</p>
      </S.Logo>
      {props.notSearch === undefined && <Search />}

      <S.Pokedex>
        <Link to="/myPokedex">
          <img src={Pokedex} alt="Iamgem da Pokedex" />
        </Link>
      </S.Pokedex>
    </S.BoxHeader>
  )
}

export default Header
