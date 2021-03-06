import React from 'react';
import Default from '../components/Layout/Default'
import bgImage from '../components/Images/image3.jpg'
import styled, { keyframes } from "styled-components";
import Container from '../components/Common/Container'
import ConceptImg from '../components/Images/image8.jpg'
import ImgGroup1 from '../components/Images/image1.jpg'
import ImgGroup2 from '../components/Images/image2.jpg'
import ImgGroup3 from '../components/Images/image3.jpg'
import ImgGroup4 from '../components/Images/image4.jpg'
import ImgGroup5 from '../components/Images/image5.jpg'
import ImgGroup6 from '../components/Images/image6.jpg'
import ShopInfoImg from '../components/Images/image9.jpg'
import MenuImg from '../components/Images/image5.jpg'
import FianlSectionPart from '../components/FinalPart/FinalSectionPart'
import Landscape from '../components/Common/Landscape'
import FadeInUp from "../components/Animations/FadeInUp";
import FadeInRight from "../components/Animations/FadeInRight";
import FadeIn from "../components/Animations/FadeIn";
import { motion } from "framer-motion";


const Box = styled.div`
  display: flex;
  flex-flow:column nowrap;
  width: 100%;
  margin-top: 100px;
  @media (min-width:681px){
    margin-top: 160px;
  }
`;
const Row = styled.div`
  margin-top: 100px;
  display: flex;
  flex-flow:column nowrap;
  width: 100%;
  position:relative;
  @media (min-width:681px){
    margin-top: 160px;
    flex-flow:row nowrap;
  }
`;
const ConceptBox = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-flow:column nowrap;
  @media (min-width:681px){
    padding-right:24px;
    width:50%;
  }
`
const ConceptImageContainer = styled.div`
  width:100%;
  height:306px;
  position: relative;
  overflow:hidden;
  img{
    width:100%;
  }
  @media (min-width:681px){
    width:50%;
    position:absolute;
    bottom:0;
    right:0;
    img{
      bottom:-30px;
      position:absolute;
    }
  }
`
const ImgGroup = styled.div`
  width:80%;
  display:flex;
  flex-flow:column nowrap;
  margin:0 auto;
  @media (min-width:1365px){
    width:60%;
  }
`
const ImgItem = styled(motion.div)`
  width:100%;
  padding-top:75%;
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  background-image: ${props => `url(${props.src})`};
  margin-bottom:4px;
`
const DetileGroup = styled.div`
  display:flex;
  flex-flow:column nowrap;
  width:80%;
  margin:0 auto;
  padding:24px 36px;
  border-top:1px solid rgb(180, 180, 180);
  border-bottom:1px solid rgb(180, 180, 180);
  @media (min-width:681px){
    flex-flow:row nowrap;
  }
`
const TitleGroup = styled.div`
  width:100%;
  padding-right:0px;
  @media (min-width:681px){
    width:50%;
    padding-right:16px;
  }
`
const ParaBox = styled.div`
  width:100;
  padding-left:0px;
  @media (min-width:681px){
    width:50%;
    padding-left:16px;
  }
`
const Title = styled.div`
  font-size: 32px;
  margin-bottom: 24px;
  line-height: 1.7;
  letter-spacing: 0.08rem;
  div{
    margin-bottom:32px;
  }
  @media (min-width:681px){
    div{}
    &:last-child{
      margin-bottom:0px;
    }
  }
`;
const Para = styled.div`
  font-size: 18px;
  line-height: 2.2;
  margin-bottom: 24px;
  letter-spacing: 0.08rem;
  &:last-child{
    margin-bottom: 0px;
  }
`;
const fadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`
const StyledDiv = styled.div`
  width:100%;
  height:100%;
  opacity:0;
  background-color: #fff;
  animation: ${fadeIn} 0.5s 2s forwards;
`
const About = () =>{
  return(
    <Default>
      <StyledDiv>
        {/* Landscape */}
        <Landscape 
        landscapeImg={bgImage}
        title={'About'}
        />
        {/* main section */}
        <Container style={{overflow:'hidden'}}>
          {/* section one */}
          <Row>
            <ConceptBox>
              <FadeInUp>
                <Title>Lorem, ipsum dolor.</Title>
                <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis cum inventore ea ad.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis cum inventore ea ad.</Para>
                <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis cum inventore ea ad cum inventore ea ad.</Para>
                <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis cum inventore ea ad consectetur adipisicing elit. Et perferendis cum inventore ea ad.</Para>
              </FadeInUp>
            </ConceptBox>
            <ConceptImageContainer>
              <FadeIn>
                <img src={ConceptImg} alt=''></img>
              </FadeIn>
            </ConceptImageContainer>
          </Row>
          {/* section two */}
          <Box>
            <Title>Lorem, ipsum dolor.</Title>
            <ImgGroup>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup1}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup2}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup3}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup4}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup5}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup6}></ImgItem>
            </ImgGroup>
          </Box>
          <Box>
            <DetileGroup>
              <TitleGroup>
                <Title>Lorem ipsum dolor sit amet.</Title>
                <Title>Lorem ipsum dolor sit amet<br/>consectetur adipisicing.</Title>
              </TitleGroup>
              <ParaBox>
                <FadeInRight>
                  <Para>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestias excepturi assumenda illo quis, dicta facilis aut possimus! Voluptatibus, illum.</Para>
                </FadeInRight>
              </ParaBox>
            </DetileGroup>
          </Box>
          {/* section three */}
          <Box>
            <Title>Shop's Preference</Title>
            <ImgGroup>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup1}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup2}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup3}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup4}></ImgItem>
            </ImgGroup>
          </Box>
          <Box>
            <DetileGroup>
              <TitleGroup>
                <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
              </TitleGroup>
              <ParaBox>
                <FadeInRight>
                  <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde repellendus nihil, a consequuntur placeat ducimus minima illo neque facere! Placeat possimus dolorem nihil omnis necessitatibus enim suscipit?</Para>
                </FadeInRight>
              </ParaBox>
            </DetileGroup>
          </Box>
          {/* section four */}
          <Box>
            <Title>Book a room</Title>
            <ImgGroup>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup1}></ImgItem>
              <ImgItem whileHover={{scale:1.3}} src={ImgGroup2}></ImgItem>
            </ImgGroup>
          </Box>
          <Box>
            <DetileGroup>
              <TitleGroup>
                <Title>Lorem ipsum dolor sit amet.</Title>
              </TitleGroup>
              <ParaBox>
                <FadeInRight>
                  <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis harum in molestias, minima ducimus nobis omnis velit.</Para>
                </FadeInRight>
              </ParaBox>
            </DetileGroup>
          </Box>
          {/* final section */}
          <FianlSectionPart
          addressFirst={'/menu'} 
          addressSec={'/shopinfo'}
          imgSrcFirst={MenuImg} 
          imgSrcSec={ShopInfoImg} 
          titleFirst={'Menu'}
          titleSec={'Shop Info'}
        ></FianlSectionPart>
        </Container>
      </StyledDiv>
    </Default>
  )
}

export default About