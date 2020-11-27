import React from 'react';
import Default from '../components/Layout/Default';
import Container from '../components/Common/Container'
import Landscape from '../components/Common/Landscape';
import bgImage from '../components/Images/image9.jpg'
import FianlSectionPart from '../components/FinalPart/FinalSectionPart'
import AboutLinkImg from '../components/Images/image3.jpg'
import MenuLinkImg from '../components/Images/image5.jpg'
import styled from 'styled-components'
import GoogleApiWrapper from '../components/GoogleMapKey/GoogleApiWrapper'

const Box = styled.div`
  display: flex;
  flex-flow:column nowrap;
  width: 100%;
  margin-top: 100px;
  @media (min-width:681px){
    margin-top: 160px;
  }
`;
const MapContainer= styled.div`
  width:100%;
  height:768px;
  display:flex;
  position: relative;
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

const ShopInfo = () =>{
  return(
    <Default>
      <Landscape 
      landscapeImg={bgImage} 
      title={'Shop’s Info'}
      ></Landscape>
      {/* main section */}
      <Container>
        {/* section one */}
        <Box>
          <div className="">123</div>
        </Box>
        {/* section two */}
        <MapContainer>
          <GoogleApiWrapper />
        </MapContainer>
        {/* final section */}
        <FianlSectionPart
          addressFirst={'/about'} 
          addressSec={'/menu'}
          imgSrcFirst={AboutLinkImg} 
          imgSrcSec={MenuLinkImg} 
          titleFirst={'About'}
          titleSec={'Menu'}
         />
      </Container>
    </Default>
  )
}

export default ShopInfo