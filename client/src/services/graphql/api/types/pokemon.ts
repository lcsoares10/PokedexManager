export type pokemonType = {
  name: string
  url?: string
  image: string
  id: number
  types: string
}

export type pokemonListType = {
  count?: number
  next?: string
  previous?: string
  nextOffset?: number
  prevOffset?: number
  params?: string
  results: Array<pokemonType>
  status?: boolean
  message?: string
}
