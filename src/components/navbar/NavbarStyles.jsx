import styled from 'styled-components'

const NavbarStyled = styled.div`
  background: #036;
  ul {
    display: flex;
    margin: 0 auto;
    max-width: 800px;
    justify-content: space-between;
    list-style-type: none;
  }

  li {
    padding: 1rem 2rem 1.15rem;
    text-transform: uppercase;
    color: white;
    min-width: 80px;
    margin: auto;
  }

  li:hover {
    background: #09f;
    color: white;
    font-weight: bold;
    transition: .2s;
  }

  li a {
    color: white;
    text-decoration: none;
  }

  li .active {
    font-weight: bold;
    color: #fff;
    border-bottom: 6px solid #f8cc06;
    padding-bottom: 1.12rem;
  }

  li a span {
    border-radius: 100px;
    background: #fe3e3e;
    color: white;
    font-weight: bold;
    padding: 4px 9px;
    margin-left: 2px;
  }
`

export {
  NavbarStyled
}