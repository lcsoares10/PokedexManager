import React from 'react'
import * as S from './style'
type props = {
  legends: Array<string>
}

const LegendTypesPokemon: React.FC<props> = props => {
  return (
    <S.Subtitle>
      <S.SubtitleLine>
        {props.legends.map((url, key) => (
          <S.SubtitleItem key={key}>
            <img src={url} alt="" />
            <p>Normal</p>
          </S.SubtitleItem>
        ))}
      </S.SubtitleLine>
    </S.Subtitle>
  )
}

export default LegendTypesPokemon
