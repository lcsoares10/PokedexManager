import React from 'react'
import * as S from './style'
import SendBlack from '../../assets/images/send_black.svg'
import { useSearch } from '../../context/Search'

const Search: React.FC = () => {
  const { search, setSearch } = useSearch()
  return (
    <S.BoxSearch>
      <S.Input
        type="text"
        placeholder="Procurar o pókemons"
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
      />
      <S.ButtonSend>
        <img src={SendBlack} alt="" />
      </S.ButtonSend>
    </S.BoxSearch>
  )
}

export default Search
