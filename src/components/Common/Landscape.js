import React from 'react';
import styled from 'styled-components'

const LandscapeSection = styled.div`
  width: 100%;
  position: relative;
`
const SectionTitle = styled.div`
  font-size:24px;
  font-weight:bold;
  color:#fff;
  position: absolute;
  left:10%;
  bottom:10%;
  letter-spacing:.3rem;
  line-height:1.3rem;
  &:after{
    content:'';
    width:100%;
    height:1px;
    background-color:#fff;
    position: absolute;
    bottom:0;
    left: 0;
  }
  @media (min-width:681px){
    font-size:48px;
    left:5%;
    bottom:5%;
    letter-spacing:.5rem;
    line-height:2rem;
  }
`
const BgContainer =styled.div`
  width:100%;
  padding-top:30%;
  background-image: ${props => `url(${props.src})`};
  background-position:center;
  background-size:cover;
`

const Landscape = ({landscapeImg, title}) =>{
  return(
    <LandscapeSection>
      <BgContainer src={landscapeImg} />
      <SectionTitle>{title}</SectionTitle>
    </LandscapeSection>

  )
}

export default Landscape