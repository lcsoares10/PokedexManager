import styled from 'styled-components'
export const Card = styled.div`
  display: flex;
  margin: 15px 10px;
  flex-direction: column;
  width: 300px;
  max-width: 320px;
  padding: 0px 10px;
  background: ${props => props.theme.primary};
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const TitleCard = styled.h2`
  font-size: 2.8rem;
  font-weight: 200;
  text-align: left;
  margin: 20px;
  color: ${props => props.theme.text};
  text-transform: capitalize;
`
export const ArticleCard = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`
export const FigureCard = styled.img`
  width: 100%;
  max-width: 150px;
`
export const BadgeCard = styled.span`
  color: ${props => props.theme.light};
  background: black;
  font-size: 1.5rem;
  padding: 5px 30px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const FooterCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FooterButton = styled.button`
  background: ${props => props.theme.secundary};
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  border: 2px solid ${props => props.theme.secundary};
  border-radius: 30px;
  padding: 10px 20px;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background: none;
    border: 2px solid ${props => props.theme.light};
  }
`
