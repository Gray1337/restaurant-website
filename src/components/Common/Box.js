import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
  display:flex;
  flex-direction:column;
  align-items:top;
  @media (min-width:1365px){
    flex-direction:row;
  }
`


export default Box