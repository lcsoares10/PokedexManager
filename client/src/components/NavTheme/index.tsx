import React from 'react'
import DarkLogo from '../../assets/images/dark_logo.svg'
import WaterLogo from '../../assets/images/water_logo.svg'
import FireLogo from '../../assets/images/fire_logo.svg'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 20vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  return (
    <Nav>
      <img src={DarkLogo} alt="" />
      <img src={WaterLogo} alt="" />
      <img src={FireLogo} alt="" />
    </Nav>
  )
}

export default NavTheme
