import styled from 'styled-components'


const FlexContainer = styled.div`
  display:flex;
  flex-flow:column nowrap;
  width:80%;
  height:100%;
  margin:0 auto;
  @media (min-width:681px){
    width:90%;
    flex-flow:row nowrap;
  }
`
export default FlexContainer
