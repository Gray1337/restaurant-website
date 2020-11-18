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
import PlatesBg from "../components/Images/platesbg.png";
import RestaurantBg from '../components/Images/restaurantbg.jpg'

const LogoContainer = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background-position: ${(props) => props.bgp};
  background-size: contain;
  background-repeat: no-repeat;
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const JumbotronContainer = styled.div`
  width: 100%;
  height: 100vh;
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
const Des = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
`;
const JumTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
`;
const JumP = styled.div`
  font-size: 24px;
  font-weight: 300;
`;
const Row = styled.div`
  width: 100%;
  margin-top: 160px;
  display: flex;
`;
const ImgContainer = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 56.25%;
`;
const Title = styled.div`
  font-size: 24px;
  margin: 0px 0 24px 0;
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
  width: 240px;
  height: 50px;
  padding: 4px 8px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #000;
  cursor: pointer;
  color: #000;
  margin-right:32px;
`;

const HomePage = () => {
  return (
    <Default fixedHeader>
      {/* <ClearFix /> */}
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
      <Box>
        <Row>
          <Container style={{ display: "flex" }}>
            <div style={{ width: "30%" }}>
              <LogoContainer src={Logo} width={"100%"} bgp={"left"} />
            </div>
            <div className="" style={{ width: "70%" }}>
              <Para
                style={{
                  paddingLeft: "56px",
                  borderLeft: "1px solid #e8e8e8",
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
            </div>
          </Container>
        </Row>
        <Row>
          <div className="" style={{ width: "60%" }}>
            <ImgContainer src={Jumbotron3} />
          </div>
          <div
            className=""
            style={{ width: "40%", padding: "0 5%", alignSelf: "center" }}
          >
            <Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              voluptate!
            </Title>
            <Para style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              velit dolore. Iure dolores aut eius nulla voluptas nobis esse
              autem amet ea ullam optio sapiente, neque suscipit dolor, id
              repellat.
            </Para>
            <Link to="/menu">
              <Btn>Menu</Btn>
            </Link>
          </div>
        </Row>
        <Row>
          <div
            className=""
            style={{ width: "40%", padding: "0 5%", alignSelf: "center" }}
          >
            <Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              voluptate!
            </Title>
            <Para style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              velit dolore. Iure dolores aut eius nulla voluptas nobis esse
              autem amet ea ullam optio sapiente, neque suscipit dolor, id
              repellat.
            </Para>
            <Link to="/menu">
              <Btn>Menu</Btn>
            </Link>
          </div>
          <div className="" style={{ width: "60%" }}>
            <img src={PlatesBg} alt={''} style={{width:'100%'}}/>
          </div>
        </Row>
        <Row>
          <div className="" style={{ width: "60%" }}>
            <ImgContainer src={Jumbotron4} />
          </div>
          <div
            className=""
            style={{ width: "40%", padding: "0 5%", alignSelf: "center" }}
          >
            <Title>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              voluptate!
            </Title>
            <Para style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
              velit dolore. Iure dolores aut eius nulla voluptas nobis esse
              autem amet ea ullam optio sapiente, neque suscipit dolor, id
              repellat.
            </Para>
            <Link to="/menu">
              <Btn>Menu</Btn>
            </Link>
          </div>
        </Row>
        <Row>
          <JumboImg src={RestaurantBg} height={'100%'} fixed={'initial'} style={{paddingTop:'30%'}}/>
        </Row>
        <Row>
          <Container style={{ display: "flex" }}>
            <div style={{ width: "30%", padding:'0 5%' }}>
              <Title>Lorem ipsum dolor sit amet consectetur?</Title>
            </div>
            <div className="" style={{ width: "70%" }}>
              <Para
                style={{
                  paddingLeft: "56px",
                  borderLeft: "1px solid #e8e8e8",
                  marginBottom: "0px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eaque earum modi debitis vero quae corporis a! Accusamus minima, eveniet accusantium ratione nostrum totam id sed incidunt doloribus, molestias et.
                <div className="" style={{paddingTop:'24px'}}>
                  <Btn>Shop's Preference</Btn>
                  <Btn>Shop Info</Btn>
                </div>
              </Para>
            </div>
          </Container>
        </Row>
      </Box>
    </Default>
  );
};

export default HomePage;
