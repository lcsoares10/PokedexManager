import React from 'react'

import Container from '../Container'

const Main: React.FC = () => {
  return (
    <Container>
      <main>
        <header>
          <h1>Pokémons encontrados</h1>
          <div>
            <p>Filtrar por tipo</p>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
        </header>
        <section>
          <div>
            <div>Pikachu</div>
            <div>Charizard</div>
            <div>Gengar</div>
          </div>
        </section>
      </main>
    </Container>
  )
}

export default Main
