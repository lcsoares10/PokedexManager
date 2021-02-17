import React from 'react'
import styled from 'styled-components'
import Title from '../Title'

export const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ArticleHero = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Graphic = styled.div`
  max-width: 300px;
  width: 100%;
`
export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const SubtitleLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const SubtitleItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  p {
    font-size: 1rem;
  }
  img {
    width: 30px;
  }
`

// import { Container } from './styles';

const HeroPokedex: React.FC = () => {
  return (
    <Hero>
      <Title>POKÉDEX</Title>
      <ArticleHero>
        <Graphic></Graphic>
        <Subtitle>
          <SubtitleLine>
            <SubtitleItem>
              <img src="" alt="" />
              <p>Normal</p>
            </SubtitleItem>
          </SubtitleLine>
        </Subtitle>
      </ArticleHero>
    </Hero>
  )
}

export default HeroPokedex
