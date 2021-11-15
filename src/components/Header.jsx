import React from 'react';
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router';
import styled from 'styled-components';

const HeaderSection = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`

const HeaderWrapper = styled.div`
  padding: 15px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  & {
    user-select: none;
  }

  &:hover {
    cursor: pointer;
  }
`

const LogoTitle = styled.div`
  font-size: 22pt;
  font-weight: bold;
`

const NavBar = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`

const NavLink = styled(Link)`
  & {
    color: black;
    font-size: 13pt;
    text-decoration: none
  }
  
  &:hover {
    text-decoration: underline;
    font-weight: bold
  }
`

const Header = () => {
  const [toHome, setToHome] = React.useState(false)

  if (toHome) {
    return <Navigate to="/" />
  }

  return (
    <HeaderSection>
      <HeaderWrapper>
        {/* Logo */}
        <Logo onClick={() => setToHome(true)}>
          <LogoTitle>Alexander Lau</LogoTitle>
          <div>Composer</div>
        </Logo>

        {/* Navbar */}
        <NavBar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/compositions">Compositions</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavBar>
      </HeaderWrapper>
    </HeaderSection>
  );
}

export default Header;