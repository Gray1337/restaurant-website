import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Mask from '../Animations/Mask';
import MaskFadeIn from '../Animations/MaskFadeIn';

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
  z-index:19;
  transition:all .3s;
  transform:${(props) => props.open === true ? 'translateX(0%)': 'translateX(100%)'};
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
      padding:10px 16px;
      transition:0.2s;
      position: relative;
      :hover{
        font-weight:600;
        letter-spacing:0.1rem;
        color:#fff;
        background-color: #000;
      }
    }
  }
`
const StyleLink = styled(Link)`
  :last-child{
    margin-right:-16px;
  }
`


const RightNav = ({open}) =>{
  const [coverIt, setCoverIt] = useState('open')
  return(
    <>
    <Ul open={open}>
      <StyleLink to='/about' onClick={()=>{setCoverIt('close')}}>
        <li>About</li>
      </StyleLink>
      <StyleLink to='/menu' onClick={()=>{setCoverIt('close')}}>
        <li>Menu</li>
      </StyleLink>
      <StyleLink to='/shopinfo' onClick={()=>{setCoverIt('close')}}>
        <li>Shop's Info</li>
      </StyleLink>
    </Ul>
    {coverIt === 'open' ? <MaskFadeIn /> : ''}
    {coverIt === 'open' ? <Mask /> : ''}
    </>
  )
}

export default RightNav