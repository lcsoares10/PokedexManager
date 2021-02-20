import React, { useState } from 'react'
import Container from '../../components/Container'
import { Link, useHistory } from 'react-router-dom'
import * as S from './components/styles'

const Login: React.FC = () => {
  const history = useHistory()
  const [inputName, setInputName] = useState<string>('')

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('userName', inputName)
    history.push('/home')
  }

  return (
    <Container style={{ height: '100vh' }}>
      <S.H1>Pokédex Manager</S.H1>
      <S.Form onSubmit={event => handleInput(event)}>
        <S.Input
          type="text"
          placeholder="Digite seu nome"
          onChange={e => setInputName(e.currentTarget.value)}
        />
        <S.Button>
          <Link to="/home">Entrar</Link>
        </S.Button>
      </S.Form>
    </Container>
  )
}

export default Login
