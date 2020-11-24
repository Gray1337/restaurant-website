import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../Images/logo.svg'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


const Nav = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  padding:20px 0;
`
const LogoContainer = styled.div`
  background-position:center;
  background-repeat: no-repeat;
  background-size:contain;
  width:56px;
  @media (min-width:1365px){
    width:80px;
    padding-top:0px;
  }
`

const NavBar = () =>{
  return(
  <Nav>
    <Link to='/'>
      <LogoContainer>
        <img src={Logo} alt=''></img>
      </LogoContainer>
    </Link>
    <Burger />
  </Nav>
  )
}

export default NavBar