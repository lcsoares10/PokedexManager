import React from 'react'
import * as S from './style'
import SendBlack from '../../assets/images/send_black.svg'
// import { Container } from './styles';

const Search: React.FC = () => {
  return (
    <S.BoxSearch>
      <S.Input type="text" placeholder="Procurar o pókemons" />
      <S.ButtonSend>
        <img src={SendBlack} alt="" />
      </S.ButtonSend>
    </S.BoxSearch>
  )
}

export default Search
