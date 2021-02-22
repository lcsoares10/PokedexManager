import React from 'react'
import { addPokemon, removePokemon } from '../../redux/pokedex/actions'
import { useFetch } from '../../hook/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import GET_POKEMONS from '../../services/graphql/queries/getPokemon'
import Title from '../Title'
import * as S from './styles'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar'

type propsCard = {
  name: string
}
const DetailPokemon: React.FC<propsCard> = props => {
  const { name } = props
  const dispatch = useDispatch()
  const pokedex: Array<string> = useSelector(
    (state: any) => state.pokedexReducer.pokedex
  )

  const { data, error } = useFetch(GET_POKEMONS, { name: name })
  if (!data) {
    return <h1>Carregando</h1>
  }

  const pokemonDetail = { ...data.pokemon }

  const myPokemon = pokedex.find((namePokedex: string) => namePokedex === name)

  const handleAddPokedex = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    dispatch(addPokemon({ name: name }))
  }

  const handleRemovePokedex = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    dispatch(removePokemon({ name: name }))
  }
  return (
    <>
      <S.Header>
        <Title>{name}</Title>
      </S.Header>
      <S.wrapper>
        <S.Aside>
          <S.Img src={pokemonDetail.sprites.front_default} />
          <S.Profile>
            {!myPokemon && (
              <S.AddPokedex onClick={e => handleAddPokedex(e)}>
                Adicionar
              </S.AddPokedex>
            )}
            {myPokemon && (
              <S.RemovePokedex onClick={e => handleRemovePokedex(e)}>
                Remover
              </S.RemovePokedex>
            )}
          </S.Profile>
        </S.Aside>
        <S.Article>
          <p>Type:</p>
          <S.Badge>
            {pokemonDetail.types.map((type: any, key: number) => (
              <S.BadgeType key={key}>{type.type.name}</S.BadgeType>
            ))}
          </S.Badge>
          <p>Stats</p>
          <S.Stats>
            <>
              {pokemonDetail.stats.map((stat: any, key: number) => (
                <S.Progressbar key={key}>
                  <CircularProgressbarWithChildren
                    value={stat.base_stat}
                    styles={buildStyles({
                      rotation: 1 / 2 + 1 / 8,
                      pathColor: 'white',
                      trailColor: 'red'
                    })}
                  >
                    <p>{stat.stat.name}</p>
                    <p>{`${stat.base_stat}%`}</p>
                  </CircularProgressbarWithChildren>
                </S.Progressbar>
              ))}
            </>
          </S.Stats>
        </S.Article>
      </S.wrapper>

      <S.Footer>footer</S.Footer>
    </>
  )
}

export default DetailPokemon
