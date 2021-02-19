export type typePokemon = {
  name: string
  color: string
  url: string
}
type gropTypesPokemons = {
  [key: string]: typePokemon
}

const typesPokemon: gropTypesPokemons = {
  Normal: {
    name: 'Normal',
    color: '#9099A1',
    url: 'https://cdn.bulbagarden.net/upload/9/95/Normal_icon_SwSh.png'
  },
  Poison: {
    name: 'Poison',
    color: '#AB6AC8',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/8/8d/Poison_icon_SwSh.png/120px-Poison_icon_SwSh.png'
  },
  Steel: {
    name: 'Steel',
    color: '#5A8EA1',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/0/09/Steel_icon_SwSh.png/120px-Steel_icon_SwSh.png'
  },
  Ice: {
    name: 'Ice',
    color: '#74CEC0',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/1/15/Ice_icon_SwSh.png/120px-Ice_icon_SwSh.png'
  },
  Ghost: {
    name: 'Ghost',
    color: '#5269AC',
    url: 'https://cdn.bulbagarden.net/upload/0/01/Ghost_icon_SwSh.png'
  },
  Electric: {
    name: 'Electric',
    color: '#F3D23B',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/7/7b/Electric_icon_SwSh.png/120px-Electric_icon_SwSh.png'
  },
  Ground: {
    name: 'Ground',
    color: '#D97746',
    url: 'https://cdn.bulbagarden.net/upload/2/27/Ground_icon_SwSh.png'
  },
  Psychic: {
    name: 'Psychic',
    color: '#F97176',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/7/73/Psychic_icon_SwSh.png/120px-Psychic_icon_SwSh.png'
  },
  Gass: {
    name: 'Gass',
    color: '#63BB5B',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/a/a8/Grass_icon_SwSh.png/120px-Grass_icon_SwSh.png'
  },
  Dragon: {
    name: 'Dragon',
    color: '#0A6DC4',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/7/70/Dragon_icon_SwSh.png/120px-Dragon_icon_SwSh.png'
  },
  Water: {
    name: 'Water',
    color: '#4D90D5',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/8/80/Water_icon_SwSh.png/120px-Water_icon_SwSh.png'
  },
  Flying: {
    name: 'Flying',
    color: '#8FA8DD',
    url: 'https://cdn.bulbagarden.net/upload/b/b5/Flying_icon_SwSh.png'
  },
  Bug: {
    name: 'Bug',
    color: '#90C12C',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/9/9c/Bug_icon_SwSh.png/120px-Bug_icon_SwSh.png'
  },
  Dark: {
    name: 'Dark',
    color: '#5A5366',
    url:
      'https://cdn.bulbagarden.net/upload/thumb/d/d5/Dark_icon_SwSh.png/120px-Dark_icon_SwSh.png'
  },
  Fire: {
    name: 'Fire',
    color: '#FF9C54',
    url: 'https://cdn.bulbagarden.net/upload/a/ab/Fire_icon_SwSh.png'
  },
  Rock: {
    name: 'Rock',
    color: '#C7B78B',
    url: 'https://cdn.bulbagarden.net/upload/1/11/Rock_icon_SwSh.png'
  },
  Fighting: {
    name: 'Fighting',
    color: '#CE4069',
    url: 'https://cdn.bulbagarden.net/upload/3/3b/Fighting_icon_SwSh.png'
  }
}
export default typesPokemon
