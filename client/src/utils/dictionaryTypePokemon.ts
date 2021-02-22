export type typePokemon = {
  name: string
  color: string
  url: string
}
type gropTypesPokemons = {
  [key: string]: typePokemon
}

const typesPokemon: gropTypesPokemons = {
  normal: {
    name: 'normal',
    color: '#9099A1',
    url: 'https://cdn.bulbagarden.net/upload/9/95/Normal_icon_SwSh.png'
  },
  poison: {
    name: 'poison',
    color: '#AB6AC8',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/8/8d/Poison_icon_SwSh.png/120px-Poison_icon_SwSh.png'
  },
  steel: {
    name: 'steel',
    color: '#5A8EA1',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/0/09/Steel_icon_SwSh.png/120px-Steel_icon_SwSh.png'
  },
  ice: {
    name: 'ice',
    color: '#74CEC0',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/1/15/Ice_icon_SwSh.png/120px-Ice_icon_SwSh.png'
  },
  ghost: {
    name: 'ghost',
    color: '#5269AC',
    url: 'https://cdn.bulbagarden.net/upload/0/01/Ghost_icon_SwSh.png'
  },
  electric: {
    name: 'electric',
    color: '#F3D23B',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/7/7b/Electric_icon_SwSh.png/120px-Electric_icon_SwSh.png'
  },
  ground: {
    name: 'ground',
    color: '#D97746',
    url: 'https://cdn.bulbagarden.net/upload/2/27/Ground_icon_SwSh.png'
  },
  psychic: {
    name: 'psychic',
    color: '#F97176',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/7/73/Psychic_icon_SwSh.png/120px-Psychic_icon_SwSh.png'
  },
  grass: {
    name: 'grass',
    color: '#63BB5B',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/a/a8/Grass_icon_SwSh.png/120px-Grass_icon_SwSh.png'
  },
  dragon: {
    name: 'dragon',
    color: '#0A6DC4',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/7/70/Dragon_icon_SwSh.png/120px-Dragon_icon_SwSh.png'
  },
  water: {
    name: 'water',
    color: '#4D90D5',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/8/80/Water_icon_SwSh.png/120px-Water_icon_SwSh.png'
  },
  flying: {
    name: 'flying',
    color: '#8FA8DD',
    url: 'https://cdn.bulbagarden.net/upload/b/b5/Flying_icon_SwSh.png'
  },
  bug: {
    name: 'bug',
    color: '#90C12C',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/9/9c/Bug_icon_SwSh.png/120px-Bug_icon_SwSh.png'
  },
  dark: {
    name: 'dark',
    color: '#5A5366',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/d/d5/Dark_icon_SwSh.png/120px-Dark_icon_SwSh.png'
  },
  fire: {
    name: 'fire',
    color: '#FF9C54',
    url: 'https://cdn.bulbagarden.net/upload/a/ab/Fire_icon_SwSh.png'
  },
  rock: {
    name: 'rock',
    color: '#C7B78B',
    url: 'https://cdn.bulbagarden.net/upload/1/11/Rock_icon_SwSh.png'
  },
  fighting: {
    name: 'fighting',
    color: '#CE4069',
    url: 'https://cdn.bulbagarden.net/upload/3/3b/Fighting_icon_SwSh.png'
  }
}
export default typesPokemon
