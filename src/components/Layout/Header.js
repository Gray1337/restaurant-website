import React from 'react';
import styled from 'styled-components'
import Container from '../Common/Container'
import NavBar from '../Nav/NavBar'

const StyledHeader = styled.header`
  width:100vw;
  position:relative;
`
const StyledHeaderSection = styled.div`
  display:flex;
  justify-content:space-between;
`



const Header = () =>{
  return(
    <StyledHeader>
      <Container>
        <StyledHeaderSection>
          <NavBar />
        </StyledHeaderSection>
      </Container>
    </StyledHeader>
  )
}

export default Header