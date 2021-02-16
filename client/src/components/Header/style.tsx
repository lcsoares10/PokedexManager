import styled from 'styled-components'

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 73px;
  background: ${props => props.theme.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Logo = styled.div`
  margin-left: 30px;

  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    margin-left: 12px;
    white-space: nowrap;
    color: ${props => props.theme.text};
    font-size: 1.3rem;
  }
`
export const Pokedex = styled.div`
  margin-right: 30px;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
  p {
    margin-left: 12px;
    white-space: nowrap;
    color: ${props => props.theme.text};
    font-size: 1.3rem;
  }
`
