import styled from 'styled-components'

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const SubtitleLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  max-width: 520px;
  background: #f3f3f3;
  border-radius: 30px;
  padding: 20px 20px;
`
export const SubtitleItem = styled.div`
  display: flex;

  padding: 20px 10px;
  align-items: center;
  flex-direction: row;
  p {
    font-size: 1.5rem;
    margin-left: 10px;
  }
  img {
    width: 30px;
  }
`
