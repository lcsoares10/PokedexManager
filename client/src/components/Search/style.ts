import styled from 'styled-components'

export const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  position: relative;
  margin: 0px 10px;
`
export const Input = styled.input`
  background-color: ${props => props.theme.light};
  color: ${props => props.theme.secundary};
  font-size: 2.2rem;
  border: none;
  border-radius: 30px;
  height: 40px;
  padding-left: 50px;
  width: 100%;
`
export const ButtonSend = styled.span`
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 5px;
  img {
    width: 100%;
  }
`
