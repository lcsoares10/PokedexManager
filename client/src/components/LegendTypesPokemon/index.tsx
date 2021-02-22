import React from 'react'
import * as S from './style'
type props = {
  legends: Array<string>
  myTypes: {
    name: string
    x: any
    y: any
  }[]
}

const LegendTypesPokemon: React.FC<props> = props => {
  return (
    <S.Subtitle>
      <S.SubtitleLine>
        {props.legends.map((url, key) => (
          <S.SubtitleItem key={key}>
            <img src={url} alt="" />
            <p>{props.myTypes[key].name}</p>
          </S.SubtitleItem>
        ))}
      </S.SubtitleLine>
    </S.Subtitle>
  )
}

export default LegendTypesPokemon
