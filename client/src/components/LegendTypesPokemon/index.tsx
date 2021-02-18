import React from 'react'
import * as S from './style'
// import { Container } from './styles';
import DarkLogo from '../../assets/images/dark_logo.svg'
import FireLogo from '../../assets/images/fire_logo.svg'

const LegendTypesPokemon: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <S.Subtitle>
      <S.SubtitleLine>
        {data.map(key => (
          <S.SubtitleItem key={key}>
            <img src={DarkLogo} alt="" />
            <p>Normal</p>
          </S.SubtitleItem>
        ))}
      </S.SubtitleLine>
    </S.Subtitle>
  )
}

export default LegendTypesPokemon
