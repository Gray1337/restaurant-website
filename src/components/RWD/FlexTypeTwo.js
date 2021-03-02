import {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PlatesBg from "../Images/platesbg.png";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Para = styled(motion.div)`
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
  const InfoContainer = styled(motion.div)`
  width:100%;
  padding:0 10%;
  width:100%;
  @media (min-width:681px){
    padding:0 5%;
    width:40%;
  }
`
const Title = styled(motion.div)`
  font-size: 24px;
  margin-bottom: 24px;
  line-height: 1.7;
  letter-spacing: 0.08rem;
`;

const FlexTypeTwo =() =>{
  const [ ref, inView ] = useInView();
  const variants = {
    hiddenBottom:{
      opacity:0,
      y:160,
    },
    fadeInY:{
      y:0,
      opacity:1,
      transition:{
        ease:'easeOut',
        duration:0.5
      }
    },
    visible:{
      opacity:1,
      transition:{
        duration:1
      }
    },
    hidden:{
      opacity:0,
      transition:{
        duration:1
      }
    },
  }
  const fadeInBottom = useAnimation();
  const fadeIn = useAnimation()
  useEffect(() => {
    if (inView) {
      fadeInBottom.start('fadeInY')
      fadeIn.start('visible')
    }
    if (!inView) {
      fadeInBottom.start('hiddenBottom')
      fadeIn.start('hidden')
    }
  }, [inView,fadeInBottom,fadeIn]);
  return(
    <Row ref={ref}>
      <InfoContainer>
        <Title animate={fadeIn} variants={variants}>
          Lorem ipsum dolor sit amet Modi, voluptate!
        </Title>
        <Para animate={fadeInBottom} variants={variants} style={{ borderTop: "1px solid #e8e8e8", paddingTop: "8px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quae.
        </Para>
        <Link to="/shopinfo">
          <Btn>Shop's Info</Btn>
        </Link>
      </InfoContainer>
      <ImgContainer>
        <img src={PlatesBg} alt={''} />
      </ImgContainer>
    </Row>
  )
}
export default FlexTypeTwo