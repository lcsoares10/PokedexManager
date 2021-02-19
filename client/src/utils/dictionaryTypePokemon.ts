// enum ColorsTypesPokemon {
//   'Normal' = '#9099A1',
//   'Poison' = '#AB6AC8',
//   'Steel' = '#5A8EA1',
//   'Ice' = '#74CEC0',
//   'Ghost' = '#5269AC',
//   'Electric' = '#F3D23B',
//   'Ground' = '#D97746',
//   'Psychic' = '#F97176',
//   'Gass' = '#63BB5B',
//   'Dragon' = '#0A6DC4',
//   'Water' = '#4D90D5',
//   'Flying' = '#8FA8DD',
//   'Bug' = '#90C12C',
//   'Dark' = '#5A5366',
//   'Fire' = '#FF9C54',
//   'Rock' = '#C7B78B',
//   'Fighting' = '#CE4069'
// }

export type typePokemon = {
  name: string
  color: string
  url: string
}
type gropTypesPokemons = {
  [key: string]: typePokemon
}

const typesPokemon: gropTypesPokemons = {
  Normal: { name: 'Normal', color: '#9099A1', url: '' },
  Poison: { name: 'Poison', color: '#AB6AC8', url: '' },
  Steel: { name: 'Steel', color: '#5A8EA1', url: '' },
  Ice: { name: 'Ice', color: '#74CEC0', url: '' },
  Ghost: { name: 'Ghost', color: '#5269AC', url: '' },
  Electric: { name: 'Electric', color: '#F3D23B', url: '' },
  Ground: { name: 'Ground', color: '#D97746', url: '' },
  Psychic: { name: 'Psychic', color: '#F97176', url: '' },
  Gass: { name: 'Gass', color: '#63BB5B', url: '' },
  Dragon: { name: 'Dragon', color: '#0A6DC4', url: '' },
  Water: { name: 'Water', color: '#4D90D5', url: '' },
  Flying: { name: 'Flying', color: '#8FA8DD', url: '' },
  Bug: { name: 'Bug', color: '#90C12C', url: '' },
  Dark: { name: 'Dark', color: '#5A5366', url: '' },
  Fire: { name: 'Fire', color: '#FF9C54', url: '' },
  Rock: { name: 'Rock', color: '#C7B78B', url: '' },
  Fighting: { name: 'Fighting', color: '#CE4069', url: '' }
}
export default typesPokemon
