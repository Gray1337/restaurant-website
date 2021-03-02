import React from 'react';
import styled from 'styled-components'
import Container from '../Common/Container'
import NavBar from '../Nav/NavBar'
import { motion } from "framer-motion"

const StyledHeader = styled.header`
  width:100%;
  position:relative;
`
const StyledHeaderSection = styled(motion.div)`
  display:flex;
  justify-content:space-between;
`

const Header = () =>{
  return(
      <StyledHeader>
        <Container>
          <StyledHeaderSection initial={{opacity:0}} animate={{opacity:1}} transition={{ ease: "easeOut", duration: 1}}>
            <NavBar />
          </StyledHeaderSection>
        </Container>
      </StyledHeader>
  )
}

export default Header