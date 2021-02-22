import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { applyTheme } from '../../redux/theme/actions'

import DarkLogo from '../../assets/images/dark_logo.svg'
import WaterLogo from '../../assets/images/water_logo.svg'
import FireLogo from '../../assets/images/fire_logo.svg'
import { fireTheme, waterTheme, darkTheme } from '../../themes'

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 20vw;

  cursor: pointer;
  img {
    margin: 10px;
    width: 40px;

    &:hover {
      transform: scale(1.5);
    }
  }
`

const NavTheme: React.FC = () => {
  const dispatch = useDispatch()

  const changeTheme = (theme: any) => {
    dispatch(applyTheme(theme))
  }

  return (
    <Nav>
      <img
        src={DarkLogo}
        onClick={() => changeTheme(darkTheme)}
        alt="Imagem tema dark"
      />
      <img
        src={WaterLogo}
        onClick={() => changeTheme(waterTheme)}
        alt="Imagem tema water"
      />
      <img
        src={FireLogo}
        onClick={() => changeTheme(fireTheme)}
        alt="Imagem tema fire"
      />
    </Nav>
  )
}

export default NavTheme
