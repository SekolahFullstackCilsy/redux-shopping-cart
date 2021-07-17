import styled from 'styled-components'

const AuthStyled = styled.div`
  margin: 20px 0px;
`

const TabStyled = styled.div`
  display: flex;
  justify-content: center;
`

const Tab = styled.div`
  width: 200px;
  padding: 20px 40px;
  background: ${props => props.active ? '#222' : '#f8cc06'};
  font-weight: bold;
  color: ${props => props.active ? '#fff' : '#222'};
  font-size: 20px;
  cursor: pointer;
`

const TabContent = styled.div`
  width: 480px;
  padding: 20px 40px;
  background: #222;
  font-weight: bold;
  color: #fff;
`

const CartSummary = styled.div`
  background: #f8cc06;
  padding: 20px 40px;
  min-width: 250px;
  margin-left: 20px;
  margin-right: 20px;
`



export { AuthStyled, TabStyled, Tab, CartSummary, TabContent }