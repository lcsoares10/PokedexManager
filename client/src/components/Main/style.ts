import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const HeaderMain = styled.header`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`
export const Filter = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${props => props.theme.text};
    font-size: 1.5rem;
    margin-right: 10px;
  }
`
export const SelectFilter = styled.select`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  width: 70px;
  padding: 2px 4px;
  border-radius: 30px;
  border: none;
  background: ${props => props.theme.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.text};
`
export const Option = styled.option`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
