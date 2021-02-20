import React, { createContext, useContext, useState } from 'react'

type searchContextType = {
  search: string
  setSearch: (search: string) => void
}

export const SearchContext = createContext<searchContextType>({
  search: '',
  setSearch: search => search
})

export const useSearch = () => useContext(SearchContext)
