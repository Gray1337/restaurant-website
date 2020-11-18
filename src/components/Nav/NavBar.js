import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../Images/logo.svg'

const Nav = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  align-items:center;
`
const LogoContainer = styled.div`
  background-position:center;
  background-repeat: no-repeat;
  background-size:contain;
  width:56px;
  padding-top:24px;
  @media (min-width:1365px){
    width:80px;
    padding-top:0px;
  }
`

const NavBar = () =>{
  return(
  <Nav>
    <LogoContainer>
      <img src={Logo} alt=''></img>
    </LogoContainer>
    <Burger />
  </Nav>
  )
}

export default NavBar