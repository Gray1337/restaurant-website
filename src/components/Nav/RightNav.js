import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Ul = styled.div`
  display:flex;
  list-style:none;
  flex-flow:column nowrap;
  background-color:#000;
  position:fixed;
  height:100vh;
  width:300px;
  top:0;
  right:0;
  transition:all .3s;
  transform:${(props) => props.open ? 'translateX(0%)': 'translateX(100%)'};
  li{
    color:#fff;
    font-size:24px;
    padding:24px;
  }
  @media (min-width:1365px){
    height:100%;
    position:relative;
    flex-flow:row nowrap;
    background-color:rgba(0,0,0,0);
    transform:translateX(0%);
    width:100%;
    li{
      color:#000;
      padding:10px;
      :last-child{
        padding-right:0px;
      }
    }
  }

`

const RightNav = (props) =>{
  return(
    <Ul open={props.open}>
      <Link to='/about'>
        <li>About</li>
      </Link>
      <Link to='/menu'>
        <li>Menu</li>
      </Link>
      <Link to='/shopinfo'>
        <li>ShopInfo</li>
      </Link>
      <Link to='/booking'>
        <li>Booking</li>
      </Link>
      <Link to='/contact'>
        <li>Contact</li>
      </Link>
    </Ul>
  )
}

export default RightNav