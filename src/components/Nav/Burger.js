import React, { useState } from 'react'
import styled from 'styled-components';
import RightNav from '../Nav/RightNav'

const StyledBurger = styled.div`
  position:fixed;
  top:20px;
  right:20px;
  width:50px;
  height:40px;
  display:flex;
  flex-flow:column nowrap;
  justify-content:space-around;
  z-index:20;
  div{
    width:40px;
    height:2px;
    border-radius:4px;
    background-color:${({open}) => open ? '#fff' : '#000'};
    transform-origin:0px;
    transition:all 0.3s;
    &:nth-child(1){
      transform:${({open})=> open ? 'rotate(45deg)': 'rotate(0)'}
    }
    &:nth-child(2){
      opacity:${({open}) => open ? 0 : 1}
    }
    &:nth-child(3){
      transform:${({open})=> open ? 'rotate(-45deg)': 'rotate(0)'}
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