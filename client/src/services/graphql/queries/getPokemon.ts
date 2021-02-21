import { gql } from 'graphql-request'

const GET_POKEMON = gql`
  fragment types on Pokemon {
    types {
      slot
      type {
        name
      }
    }
  }

  fragment stats on Pokemon {
    stats {
      base_stat
      effort
      stat {
        name
      }
    }
  }

  fragment sprites on Pokemon {
    sprites {
      front_default
      back_default
    }
  }

  fragment moves on Pokemon {
    moves {
      move {
        name
      }
    }
  }

  fragment held_items on Pokemon {
    held_items {
      item {
        name
      }
    }
  }

  fragment abilities on Pokemon {
    abilities {
      ability {
        url
        name
      }
      is_hidden
      slot
    }
  }

  query GET_POKEMON($name: String!) {
    pokemon(name: $name) {
      ...abilities
      base_experience
      forms {
        name
      }
      height
      ...held_items
      id
      is_default
      location_area_encounters
      ...moves
      name
      order
      species {
        name
      }
      ...sprites
      ...stats
      ...types
      weight
      status
      message
    }
  }
`

export default GET_POKEMON
