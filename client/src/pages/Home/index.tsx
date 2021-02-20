import React, { useState } from 'react'

import Header from '../../components/Header'
import Main from '../../components/Main'
import { SearchContext } from '../../context/Search'
const Home: React.FC = () => {
  const [search, setSearch] = useState('')
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Header />
      <Main />
    </SearchContext.Provider>
  )
}

export default Home
