import styled from 'styled-components'

export const H1 = styled.h1`
  margin-top: 150px;
  padding: 30px;
  color: ${props => props.theme.secundary};
  font-size: 6rem;
`

export const Form = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Input = styled.input`
  padding: 10px;
  background: none;
  border: 2px solid ${props => props.theme.secundary};
  border-radius: 30px;
  font-size: 2rem;
  padding-left: 50px;
  margin: 15px;
  width: 100%;
  color: ${props => props.theme.secundary};
`
export const Button = styled.button`
  padding: 10px 50px;

  border: 2px solid ${props => props.theme.secundary};
  border-radius: 30px;
  background: ${props => props.theme.secundary};
  &:hover {
    background: ${props => props.theme.primary};
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${props => props.theme.text};
    &:hover {
      color: ${props => props.theme.light};
    }
  }
`
