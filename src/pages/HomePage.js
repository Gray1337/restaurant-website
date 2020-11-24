import React from "react";
import Default from "../components/Layout/Default";
import Jumbotron1 from "../components/Images/image4.jpg";
import Jumbotron2 from "../components/Images/image8.jpg";
import Jumbotron3 from "../components/Images/image9.jpg";
import Jumbotron4 from "../components/Images/image7.jpg";
import { Carousel } from "antd";
import styled from "styled-components";
import Container from "../components/Common/Container";
import ClearFix from "../components/Common/ClearFix";
import Logo from "../components/Images/logo.svg";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import RestaurantBg from '../components/Images/restaurantbg.jpg'
import { useViewport } from "../components/Common/ViewPortContext";
import FlexContainer from '../components/Common/FlexContainer'
import FlexTypeOne from '../components/RWD/FlexTypeOne'
import FlexTypeTwo from '../components/RWD/FlexTypeTwo'
import Test from '../components/RWD/Test'

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
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: ${props => props.fixed};
  height: ${props => props.height};
  width: 100%;
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
  position:relative;
  @media (min-width:681px){
    margin-bottom:0px;
    max-width:160px;
  }
  img{
    @media (min-width:681px){
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      background-position: left;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
const ProduceContainer = styled.div`
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
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #000;
  cursor: pointer;
  color: #000;
  margin-right:32px;
  @media (min-width:1365px){
    width:240px;
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
  } else if ( width > Desktop){
    <Test />
  }
}
// 問題


const HomePage = () => {
  return (
    <Default fixedHeader>
      <ClearFix height='100px'/>
      {/* jumbotron */}
      <Box>
        <JumbotronContainer>
          <Carousel effect="fade" autoplay dots={false} pauseOnHover={false}>
            <JumboImg src={Jumbotron1} fixed={'fixed'} height={'100vh'}/>
            <JumboImg src={Jumbotron2} fixed={'fixed'} height={'100vh'}/>
            <JumboImg src={Jumbotron3} fixed={'fixed'} height={'100vh'}/>
            <JumboImg src={Jumbotron4} fixed={'fixed'} height={'100vh'}/>
          </Carousel>
        </JumbotronContainer>
        <Des>
          <JumTitle>WASHOKURE DESIGN</JumTitle>
          <JumP>Respect Old Things, Create Present Innovate the Tradition</JumP>
        </Des>
      </Box>
      {/* main section */}
      <Box>
        {/* section 1 */}
        <Container>
          <Row>
            <LogoContainer>
              <img src={Logo} alt=''></img>
            </LogoContainer>
            <ProduceContainer>
              <Para
                style={{
                  paddingLeft: "56px",
                  borderLeft: "1px solid rgb(189 189 189)",
                  marginBottom: "0px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                atque necessitatibus error, porro veritatis quisquam mollitia
                sint delectus sapiente quidem. Expedita sint perspiciatis fuga
                illum atque maxime fugit similique tempora hic voluptate
                molestiae dolores dolor, eligendi quia explicabo illo sunt
                temporibus. Facere sequi pariatur beatae, sint fugiat temporibus
                atque totam veniam saepe unde officia accusantium doloremque
                nobis consectetur aspernatur nihil.
              </Para>
            </ProduceContainer>
          </Row>
        </Container>
        {/* section 2 */}
        <Row>
          <ImgContainer>
            <img src={Jumbotron3} alt=''></img>
          </ImgContainer>
          <InfoContainer>
            <Title>
              Lorem ipsum dolor sit amet elit. Modi, voluptate!
            </Title>
            <Para style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatum maiores assumenda rem temporibus culpa.
            </Para>
            <Link to="/menu">
              <Btn>Menu</Btn>
            </Link>
          </InfoContainer>
        </Row>
        {/* section 3 */}
        {/* <Row>
          <ImgContainer>
            <img src={PlatesBg} alt={''} />
          </ImgContainer>
          <InfoContainer>
            <Title>
              Lorem ipsum dolor sit amet Modi, voluptate!
            </Title>
            <Para style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quae.
            </Para>
            <Link to="/menu">
              <Btn>Menu</Btn>
            </Link>
          </InfoContainer>
        </Row> */}
        <MobileSize />
        {/* section 4 */}
        <Row>
          <ImgContainer>
            <img src={Jumbotron4} alt=''/>
          </ImgContainer>
          <InfoContainer>
            <Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              voluptate!
            </Title>
            <Para style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officiis.
            </Para>
            <Link to="/menu">
              <Btn>Menu</Btn>
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
              <Title>Lorem ipsum dolor sit amet consectetur?</Title>
            </AboutContainer>
            <ProduceContainer>
              <Para>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eaque earum modi debitis vero quae corporis a! Accusamus minima, eveniet accusantium ratione nostrum totam id sed incidunt doloribus, molestias et.
                <BtnGroup>
                  <Btn>Shop's Preference</Btn>
                  <Btn>Shop Info</Btn>
                </BtnGroup>
              </Para>
            </ProduceContainer>
          </FlexContainer>
        </Row>
      </Box>
    </Default>
  );
};

export default HomePage;
