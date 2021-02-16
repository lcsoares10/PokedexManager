import React from 'react'
import Container from '../../components/Container'
import { Link, useHistory } from 'react-router-dom'
import * as S from './components/styles'

const Login: React.FC = () => {
  const history = useHistory()

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push('/home')
  }

  return (
    <Container>
      <S.H1>Pokédex Manager</S.H1>
      <S.Form onSubmit={event => handleInput(event)}>
        <S.Input type="text" placeholder="Digite seu nome" />
        <S.Button>
          <Link to="/home">Entrar</Link>
        </S.Button>
      </S.Form>
    </Container>
  )
}

export default Login
