import React from "react";
import styled from "styled-components";
import Container from "../Common/Container";
import footerBg from "../Images/bg.jpg";
import LogoHorizontal from "../Images/logohorizontal.svg";
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const Box = styled.div`
  display:flex;
  flex-direction:column;
  align-items:top;
  @media (min-width:1365px){
    flex-direction:row;
  }
`
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding:80px 0px;
  margin-top:160px;
`;
const InfoContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  padding-right:0px;
  padding-bottom:16px;
  border-bottom:1px solid #f8f8f8;
  @media (min-width:1365px){
    width:30%;
    padding-right:20px;
    border-right: 1px solid #fff;
    border-bottom:0px;
    padding-bottom:0px;
  }
`;
const HorizontalLogo = styled.div`
  background-position:center;
  background-repeat: no-repeat;
  background-size:contain;
  width:45%;
  margin-bottom:16px;
`
const Reservation = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  padding-left:0px;
  padding-top:16px;
  margin-bottom:-24px;
  @media (min-width:1365px){
    width:70%;
    padding-left:36px;
    padding-top:0px;
  }
`
const P = styled.div`
  font-size:20px;
  color:white;
  line-height:2;
  margin-bottom: 16px;
`
const Title = styled.div`
  font-size:24px;
  color:white;
  margin:0px 0 24px 0;

`
const FollowBox = styled.div`
  display:flex;
  div{
    margin-bottom:0px;
    font-size:14px;
    color:white;
    line-height:2;
    padding-right:16px;
  }
`
const BookBox = styled.div`
  display:flex;
  flex-direction:column;
  align-items:top;
  @media (min-width:900px){
    flex-direction:row;
  }
`
const BookBlock = styled.div`
  display:flex;
  flex-direction:column;
  font-size:24px;
  color:white;
  width:100%;
  margin-bottom:24px;
  @media (min-width:900px){
    width:50%;
    margin-right:56px;
  }
`
const Pbox = styled.div`
  border: 1px solid #fff;
  width:100%;
  padding:2% 4%;
  text-align:left;
`

const FooterBottom = styled.div`
  width:100%;
  background-color:#efefef;
  text-align:center;
  p{
    padding:16px 0 ;
    margin:auto;
    font-size:12px;
    color:#666;
    letter-spacing:0.2rem;
  }  
`
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const Footer = () => {
  return (
    <div className="">
      <StyledFooter src={footerBg}>
        <Container>
          <Box>
            <InfoContainer>
              <HorizontalLogo>
                <img src={LogoHorizontal} alt=''></img>
              </HorizontalLogo>
              <P color={'#fff'}>106-0031 Edge building 1-1-1, Nishiazabu, Minato-ku, Tokyo, Japan</P>
              <P>Closed on Sundays and National Holidays</P>
              <FollowBox>
                <div>Follow us</div>
                <Link to='#facebook'>
                  <FacebookOutlined style={{color:'white', fontSize:'24px', alignSelf:'center', paddingRight:'16px'}}/>
                </Link>
                <Link to='#instagram'>
                  <InstagramOutlined style={{color:'white', fontSize:'24px', alignSelf:'center'}}/>
                </Link>
              </FollowBox>
            </InfoContainer>
            <Reservation>
              <Title>《 RESERVATION 》</Title>
              <BookBox>
                <BookBlock>
                  <Title>Reservation through Internet</Title>
                  <Pbox>
                    <DatePicker showTime onChange={onChange} onOk={onOk} style={{fontSize:'18px'}}/>
                  </Pbox>
                </BookBlock>
                <BookBlock>
                  <Title>Book by Phone</Title>
                  <Pbox>+886 0912345678</Pbox>
                </BookBlock>
              </BookBox>
              <Title>We only accept reservations by the day before.</Title>
            </Reservation>
          </Box>
        </Container>
      </StyledFooter>
      <Box>
        <FooterBottom>
          <p>© 2020 PUDDING PUB.ALL RIGHTS RESERVED.</p>
        </FooterBottom>
      </Box>
    </div>
  );
};

export default Footer;
