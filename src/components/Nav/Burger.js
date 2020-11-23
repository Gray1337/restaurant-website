import React, { useState } from 'react'
import styled from 'styled-components';
import RightNav from '../Nav/RightNav'

const StyledBurger = styled.div`
  position:fixed;
  top:20px;
  right:10%;
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
    background-color:${(props) => props.open ? '#fff' : '#000'};
    transform-origin:0px;
    transition:all 0.3s;
    &:nth-child(1){
      transform:${(props) => props.open ? 'rotate(45deg)': 'rotate(0)'}
    }
    &:nth-child(2){
      opacity:${(props) => props.open ? 0 : 1}
    }
    &:nth-child(3){
      transform:${(props) => props.open ? 'rotate(-45deg)': 'rotate(0)'}
    }
  }
  @media (min-width:681px){
    right:5%;
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