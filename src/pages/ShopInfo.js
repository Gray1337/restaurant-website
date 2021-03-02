import React from 'react';
import Default from '../components/Layout/Default';
import Container from '../components/Common/Container'
import Landscape from '../components/Common/Landscape';
import bgImage from '../components/Images/image9.jpg'
import FianlSectionPart from '../components/FinalPart/FinalSectionPart'
import AboutLinkImg from '../components/Images/image3.jpg'
import MenuLinkImg from '../components/Images/image5.jpg'
import styled, {keyframes} from 'styled-components'
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
const TableOutter = styled.div`
  width:90%;
  margin:0 auto;
`
const InfoTable = styled.table`
  width:100%;
  font-size:20px;
  tr{
    border-bottom:1px solid rgb(190,190,190);
    border-top:1px solid rgb(190,190,190);
    th,td{
      padding:20px 0;
    }
    td{
      padding-left:20px;
    }
  }
`
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
const ShopInfo = () =>{
  return(
    <Default>
      <StyledDiv>
        <Landscape 
        landscapeImg={bgImage} 
        title={'Shop’s Info'}
        ></Landscape>
        {/* main section */}
        <Container>
          {/* section one */}
          <Box>
            <TableOutter>
              <InfoTable className="">
                <tbody>
                  <tr className="">
                    <th className="">Shop Name</th>
                    <td className="">PuddingPub.co</td>
                  </tr>
                  <tr className="">
                    <th className="">Address</th>
                    <td className="">123-4567 Edge building 1-2-3, Nishiazabu, Minato-Aqua, Heaven, Japan</td>
                  </tr>
                  <tr className="">
                    <th className="">TEL</th>
                    <td className="">+886 0912345678</td>
                  </tr>
                  <tr className="">
                    <th className="">Open</th>
                    <td className="">5 p.m. - 11 p.m.</td>
                  </tr>
                  <tr className="">
                    <th className="">Close</th>
                    <td className="">Sundays and National Holidays</td>
                  </tr>
                  <tr className="">
                    <th className="">Credit Card</th>
                    <td className="">VISA / MasterCard / American Express / JCB / DC / 銀聯</td>
                  </tr>
                </tbody>
              </InfoTable>
            </TableOutter>
          </Box>
          {/* section two */}
          <Box>
            <MapContainer>
              <GoogleApiWrapper />
            </MapContainer>
            <p style={{letterSpacing:'0.1em',lineHeight:'2'}}>
              <span className="">3 minutes walk from holo Line live station Exit 0 / 5 minutes walk from pekora Line usada station Exit 0 /9 minutes walk from korone Line okayu station Exit te /</span>
              <a target='_blank' rel="noreferrer" href="https://g.page/ruths-chris-taichung?share" className=""> Open Google Map</a>
            </p>
          </Box>
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
      </StyledDiv>
    </Default>
  )
}

export default ShopInfo