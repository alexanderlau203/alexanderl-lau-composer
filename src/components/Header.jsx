import React from 'react';
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router';
import styled from 'styled-components';

const HeaderSection = styled.div`
  padding: 15px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: white;
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
  return (
    <HeaderSection>
      {/* Logo */}
      <Logo onClick={<Navigate to="" />}>
        <LogoTitle>Alexander Lau</LogoTitle>
        <div>Composer</div>
      </Logo>

      {/* Navbar */}
      <NavBar>
        <NavLink to="">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/compositions">Compositions</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavBar>
    </HeaderSection>
  );
}

export default Header;