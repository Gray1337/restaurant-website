import React from "react";
import Default from "../components/Layout/Default";
import Jumbotron1 from "../components/Images/image4.jpg";
import Jumbotron2 from "../components/Images/image8.jpg";
import Jumbotron3 from "../components/Images/image9.jpg";
import Jumbotron4 from "../components/Images/image7.jpg";
import { Carousel } from "antd";
import styled, {keyframes} from "styled-components";
import Container from "../components/Common/Container";
import ClearFix from "../components/Common/ClearFix";
import Logo from "../components/Images/logo.svg";
import { Link } from "react-router-dom";
import RestaurantBg from '../components/Images/restaurantbg.jpg'
import { useViewport } from "../components/Common/ViewPortContext";
import FlexContainer from '../components/Common/FlexContainer'
import FlexTypeOne from '../components/RWD/FlexTypeOne'
import FlexTypeTwo from '../components/RWD/FlexTypeTwo'
import FadeInUp from "../components/Animations/FadeInUp";
import FadeInBottom from "../components/Animations/FadeInBottom";
import FadeInLeft from "../components/Animations/FadeInLeft";
import FadeInRight from "../components/Animations/FadeInRight";
import FadeIn from "../components/Animations/FadeIn";
import { motion } from "framer-motion";



const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const JumTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
`;
const JumP = styled.div`
  font-size: 24px;
  font-weight: 300;
`;
const JumboImg = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: ${props => props.fixed};
  height: ${props => props.height};
  max-width: 100%;
`;
const JumbotronContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const Des = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  @media (min-width:681px){
    left: 5%;
    transform:translate(0%);
  }
`;
const LogoContainer = styled.div`
  width:30%;
  min-width:75px;
  max-width:130px;
  margin-bottom:36px;
  @media (min-width:681px){
    margin:auto 0;
    max-width:160px;
    margin-right:24px;
  }
  img{
    @media (min-width:681px){
      background-position: left;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
const ProductContainer = styled.div`
  width:100%;
  max-width:100%;
`
const Row = styled.div`
  margin-top: 100px;
  display: flex;
  flex-flow:column nowrap;
  width: 100%;
  position:relative;
  @media (min-width:681px){
    flex-flow:row nowrap;
    margin-top: 160px;
  }
`;
const InfoContainer = styled.div`
  width:100%;
  padding:0 10%;
  width:100%;
  @media (min-width:681px){
    padding:0 5%;
    width:40%;
  }
`
const ImgContainer = styled.div`
  margin-bottom:36px;
  width:100%;
  img{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width:100%
  }
  @media (min-width:681px){
    margin-bottom:0px;
    width:60%;
  }
`;
const AboutContainer = styled.div`
  width: 100%;
  margin-bottom:36px;
  border-bottom:1px solid rgb(189 189 189);
  @media (min-width:681px){
    margin-bottom:0px;
    width: 40%;
    border-right:1px solid rgb(189 189 189);
    border-bottom:0;
    margin-right:30px;
  }
`

const Title = styled.div`
  font-size: 32px;
  margin-bottom: 24px;
  line-height: 1.7;
  letter-spacing: 0.08rem;
`;
const Para = styled.div`
  font-size: 18px;
  line-height: 2.2;
  margin-bottom: 24px;
  letter-spacing: 0.08rem;
`;
const Btn = styled.button`
  width: 160px;
  height: 50px;
  padding: 4px 8px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  color: #000;
  margin-right:32px;
  position: relative;
  transition:all 0.2s;
  @media (min-width:1365px){
    width:240px;
  }
  &:hover{
    box-shadow:inset 0 0 0 2em #000;
    color:#fff;
  }
`;
const BtnGroup =styled.div`
  display:flex;
  flex-flow:row nowrap;
  padding-top:24px;
`

// 問題:為什麼 width > Desktop 時沒有反應?? 更聰明的做法是?
const MobileSize = () =>{
  const {width} = useViewport()
  const mobile = 681
  const Desktop = 1366
  if ( width < mobile ){
    return <FlexTypeOne />
  } else if ( mobile < width < Desktop){
    return <FlexTypeTwo />
  }
}
// 問題

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
const scrollTo = () => {
  setTimeout(()=>{
    window.scrollTo({top:2000,behavior:'smooth'})
  },[100])
}
const HomePage = () => {
  return (
    <Default fixedHeader >
      <StyledDiv>
        <ClearFix/>
        {/* jumbotron */}
        <Box style={{overflow:'hidden'}}>
          <JumbotronContainer>
            <Carousel effect="fade" autoplay dots={false} pauseOnHover={false}>
              <JumboImg src={Jumbotron1} fixed={'fixed'} height={'100vh'}/>
              <JumboImg src={Jumbotron2} fixed={'fixed'} height={'100vh'}/>
              <JumboImg src={Jumbotron3} fixed={'fixed'} height={'100vh'}/>
              <JumboImg src={Jumbotron4} fixed={'fixed'} height={'100vh'}/>
            </Carousel>
          </JumbotronContainer>
          <Des>
            <FadeInLeft>
              <JumTitle>WASHOKURE DESIGN</JumTitle>
            </FadeInLeft>
            <FadeInBottom>
              <JumP>Respect Old Things, Create Present Innovate the Tradition</JumP>
            </FadeInBottom>
          </Des>
        </Box>
        {/* main section */}
        <Box style={{overflow:'hidden'}}>
          {/* section 1 */}
          <Container >
            <Row>
              <LogoContainer>
                <FadeInUp>
                  <img src={Logo} alt=''></img>
                </FadeInUp>
              </LogoContainer>
              <FadeIn>
                <ProductContainer 
                  style={{
                    paddingLeft: "56px",
                    borderLeft: "1px solid rgb(189 189 189)",
                    marginBottom: "0px",
                  }}>
                  <Para>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    atque necessitatibus error, porro veritatis quisquam mollitia
                    sint delectus sapiente quidem. Expedita sint perspiciatis fuga
                    illum atque maxime fugit similique tempora hic voluptate
                    molestiae dolores dolor, eligendi quia explicabo illo sunt
                    temporibus. Facere sequi pariatur beatae, sint fugiat temporibus
                    atque totam veniam saepe unde officia accusantium doloremque
                    nobis consectetur aspernatur nihil.
                  </Para>
                </ProductContainer>
              </FadeIn>
            </Row>
          </Container>
          {/* section 2 */}
          <Row>
            <ImgContainer>
              <FadeInLeft>
                <motion.img  whileHover={{ scale: 1.05 }} src={Jumbotron3} alt=''></motion.img>
              </FadeInLeft>
            </ImgContainer>
            <InfoContainer>
              <FadeIn>
                <Title>
                  Lorem ipsum dolor sit amet elit. Modi, voluptate!
                </Title>
              </FadeIn>
              <FadeInBottom>
                <Para style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatum maiores assumenda rem temporibus culpa.
                </Para>
              </FadeInBottom>
              <Link to="/menu">
                <Btn>Menu</Btn>
              </Link>
            </InfoContainer>
          </Row>
          {/* section 3 */}
          <MobileSize />
          {/* section 4 */}
          <Row>
            <ImgContainer>
              <FadeIn>
                <motion.img whileHover={{ scale: 1.05 }} src={Jumbotron4} alt=''/>
              </FadeIn>
            </ImgContainer>
            <InfoContainer >
              <FadeInUp>
                <Title>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  voluptate!
                </Title>
              </FadeInUp>
              <FadeInRight>
                <Para style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officiis.
                </Para>
              </FadeInRight>
              <Link to="/menu" onClick={scrollTo}>
                <Btn>Booking Now</Btn>
              </Link>
            </InfoContainer>
          </Row>
          {/* section 5 */}
          <Row>
            <JumboImg src={RestaurantBg} height={'100%'} fixed={'initial'} style={{paddingTop:'30%'}}/>
          </Row>
          {/* bottom */}
          <Row>
            <FlexContainer>
              <AboutContainer>
                <FadeIn>
                  <Title>Lorem ipsum dolor sit amet consectetur?</Title>
                </FadeIn>
              </AboutContainer>
              <ProductContainer>
                <FadeInUp>
                  <Para>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eaque earum modi debitis vero quae corporis a! Accusamus minima, eveniet accusantium ratione nostrum totam id sed incidunt doloribus, molestias et.
                    <BtnGroup>
                      <Link to='/about'>
                        <Btn>About</Btn>
                      </Link>
                      <Link to='/shopinfo'>
                        <Btn>Shop's Info</Btn>
                      </Link>
                    </BtnGroup>
                  </Para>
                </FadeInUp>
              </ProductContainer>
            </FlexContainer>
          </Row>
        </Box>
      </StyledDiv>
    </Default>
  );
};

export default HomePage;
