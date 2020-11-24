import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PlatesBg from "../Images/platesbg.png";
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
const Row = styled.div`
  margin-top: 160px;
  display: flex;
  flex-flow:column nowrap;
  width: 100%;
  position:relative;
  @media (min-width:681px){
    flex-flow:row nowrap;
  }
`;
const ImgContainer = styled.div`
  margin-bottom:36px;
  width:100%;
  img{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width:100%
  }
`
  const InfoContainer = styled.div`
  width:100%;
  padding:0 10%;
  width:100%;
  @media (min-width:681px){
    padding:0 5%;
    width:40%;
  }
`
const Title = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
  line-height: 1.7;
  letter-spacing: 0.08rem;
`;

const FlexTypeTwo =() =>{
  return(
    <Row>
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
      <ImgContainer>
        <img src={PlatesBg} alt={''} />
      </ImgContainer>
    </Row>
  )
}
export default FlexTypeTwo