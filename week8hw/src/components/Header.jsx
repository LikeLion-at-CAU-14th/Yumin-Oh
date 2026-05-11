import styled from 'styled-components'

const Header = () => {
    return(
        <Nav>
            <Logo>MY PAGE</Logo>
            <Links>
                <button>ABOUT</button>
                <button>SKILLS</button>
                <button>LIKES</button>
                <button>CONTACT</button>
            </Links>
        </Nav>

    )

}

export default Header

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    background-color: #8babfd;
    font-size: 10px;
    color: white;
`

const Logo = styled.span`
  font-size: 13px;
  font-weight: bold;
`

const Links = styled.div`
  display: flex;
  gap: 8px;

  button {
    color: white;
    background: transparent;
    border: 2px solid white;
    padding: 3px 6px;
    font-size: 10px;
    cursor: pointer;
  }
`