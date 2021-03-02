import React, { useState } from 'react'
import styled from 'styled-components';
import RightNav from '../Nav/RightNav'

const StyledBurger = styled.div`
  width:40px;
  height:40px;
  z-index:20;
  position: relative;
  div{
    width:40px;
    height:2px;
    border-radius:4px;
    background-color:${(props) => props.open ? '#fff' : '#000'};
    transition:all 0.3s;
    z-index:20;
    position: absolute;
    transform-origin:center;
    left: 50%;
    &:nth-child(1){
      top:${props => props.open === true ? '50%' : '25%'};
      transform:translateX(-50%) ${(props) => props.open === true ? 'rotate(45deg)': 'rotate(0deg) '};
    }
    &:nth-child(2){
      top:50%;
      transform:translateX(-50%) rotate(0deg);
      opacity:${(props) => props.open === true ? 0 : 1};
    }
    &:nth-child(3){
      top:${props => props.open === true ? '50%' : '75%'};
      transform:translateX(-50%)${(props) => props.open === true ? 'rotate(-45deg)': 'rotate(0)'};
    }
  }
  @media (min-width:1365px){
    display:none;
  }
`


const Burger = () =>{
  const [open, setOpen] = useState(false)
  return(
    <div>
      <StyledBurger open={open} onClick={()=>setOpen(!open)}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </StyledBurger>
      <RightNav open={open} />
    </div>
  )
}

export default Burger