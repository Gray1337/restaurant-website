import React from 'react';
import styled from 'styled-components'
import Default from '../components/Layout/Default';
import FianlSectionPart from '../components/FinalPart/FinalSectionPart'
import AboutLinkImg from '../components/Images/image3.jpg'
import ShopLinkImg from '../components/Images/image9.jpg'
import Landscape from '../components/Common/Landscape';
import bgImage from '../components/Images/image5.jpg'
import Container from '../components/Common/Container'
import RecommandImg from '../components/Images/image7.jpg'
import Crusine1 from '../components/Images/image9.jpg'
import Crusine2 from '../components/Images/image10.jpg'
import Crusine3 from '../components/Images/image8.jpg'
import Crusine4 from '../components/Images/image7.jpg'
import Crusine5 from '../components/Images/image6.jpg'
import Crusine6 from '../components/Images/image5.jpg'
import Crusine7 from '../components/Images/image4.jpg'
import Crusine8 from '../components/Images/image3.jpg'
import Crusine9 from '../components/Images/image2.jpg'

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
const RecommandBox = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-flow:column nowrap;
  margin-bottom:24px;
  &:last-child{
    margin-bottom:0px;
  }
  @media (min-width:681px){
    padding-left:24px;
    width:50%;
    margin-bottom:0px;
  }
`
const RecommandImageContainer = styled.div`
  width:100%;
  padding-top:306px;
  background-image: ${props => `url(${props.src})`};
  background-position:center;
  background-repeat: no-repeat;
  background-size:cover;
  @media (min-width:681px){
    position:absolute;
    bottom:0;
    left:0;
    width:50%;
  }
`
const CrusineOutter = styled.div`
  margin-top:160px;
`
const CrusineContainer = styled.div`
  width:100%;
  display:flex;
  flex-flow:row nowrap;
  margin:-4px;
`
const CrusineBox = styled.div`
  width:33.333333%;
  margin:4px;
  padding-top:25%;
  background-image: ${props => `url(${props.src})`};
  background-position:center;
  background-repeat: no-repeat;
  background-size:cover;
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
const DetileGroup = styled.div`
  display:flex;
  flex-flow:column nowrap;
  width:100%;
  margin:0 auto;
  padding:36px 28px;
  border:1px solid rgb(180, 180, 180);
  @media (min-width:681px){
    flex-flow:row nowrap;
  }
`
const TitleGroup = styled.div`
  width:100%;
  white-space:normal;
  @media (min-width:681px){
    width:20%;
  }
`
const ParaBox = styled.div`
  width:100;
  padding-left:0px;
  @media (min-width:681px){
    width:80%;
    padding-left:16px;
    margin-left:16px;
    border-left:1px solid rgb(180,180,180);
  }
  @media (min-width:1365px){
    width:80%;
    padding-left:40px;
    margin-left:0px;
    border-left:1px solid rgb(180,180,180);
  }
`
const Para = styled.div`
  font-size: 18px;
  line-height: 2.2;
  margin-bottom: 24px;
  letter-spacing: 0.08rem;
  &:last-child{
    margin-bottom: 0px;
  }
`;

const Menu = () =>{
  return(
    <Default>
      <Landscape 
      landscapeImg={bgImage}
      title={'Menu'} 
      />
      {/* main section */}
      <Container>
        {/* section one */}
        <Row>
          <RecommandBox>
            <RecommandImageContainer src={RecommandImg}/>
          </RecommandBox>
          <RecommandBox>
            <Title>Lorem, ipsum dolor.</Title>
            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis cum inventore ea ad.Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis cum inventore ea ad.</Para>
            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis cum inventore ea ad cum inventore ea ad.</Para>
            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis cum inventore ea ad consectetur adipisicing elit. Et perferendis cum inventore ea ad.</Para>
          </RecommandBox>
        </Row>
        {/* section two */}
        <CrusineOutter>
          <CrusineContainer>
            <CrusineBox src={Crusine1}/>
            <CrusineBox src={Crusine2}/>
            <CrusineBox src={Crusine3}/>
          </CrusineContainer>
          <CrusineContainer>
            <CrusineBox src={Crusine4}/>
            <CrusineBox src={Crusine5}/>
            <CrusineBox src={Crusine6}/>
          </CrusineContainer>
          <CrusineContainer>
            <CrusineBox src={Crusine7}/>
            <CrusineBox src={Crusine8}/>
            <CrusineBox src={Crusine9}/>
          </CrusineContainer>
        </CrusineOutter>
        {/* section three */}
        <Box style={{border:'1px solid rgb(180, 180, 180)', padding:'2px'}}>
          <DetileGroup>
            <TitleGroup>
              <Title>Remark</Title>
            </TitleGroup>
            <ParaBox>
              <Para>Lorem ipsum dolor sit amet consectetur.</Para>
              <Para>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Para>
              <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum sunt alias omnis.</Para>
            </ParaBox>
          </DetileGroup>
        </Box>
        {/* final section */}
        <FianlSectionPart
          addressFirst={'/about'} 
          addressSec={'/shopinfo'}
          imgSrcFirst={AboutLinkImg} 
          imgSrcSec={ShopLinkImg} 
          titleFirst={'About'}
          titleSec={'Shop’s Info'}
        ></FianlSectionPart>
      </Container>
    </Default>
  )
}

export default Menu