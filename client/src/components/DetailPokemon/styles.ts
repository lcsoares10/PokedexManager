import styled from 'styled-components'
export const Header = styled.div`
  margin-top: 50px;
`

export const wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-around;
  max-width: 900px;
  width: 100%;
  flex-wrap: wrap;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  width: 300px;
`

export const Img = styled.img`
  width: 100%;
  border: 3px solid ${props => props.theme.primary};
  border-radius: 30px;
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProfileContext = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  p {
    color: ${props => props.theme.text};
    font-size: 1.5rem;
  }
`
export const Stats = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${props => props.theme.primary};
  padding: 15px;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
`
export const Progressbar = styled.div`
  margin-top: 8px;
  width: 130px;
  height: 130px;
  p {
    color: ${props => props.theme.text};
  }
`

export const Badge = styled.span`
  margin: 10px 5px;
  display: flex;
  flex-direction: row;
`
export const BadgeType = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.light};
  background: ${props => props.theme.primary};
  font-size: 1.5rem;
  padding: 5px 30px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: capitalize;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
