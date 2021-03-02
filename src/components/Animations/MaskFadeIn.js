import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  0%{
    visibility:hidden;
    background-color:rgba(41, 37, 36,0);
  }
  100%{
    visibility:visible;
    background-color:rgba(41, 37, 36,1);
  }

`

const StyledDiv = styled.div`
  width:100%;
  height:100%;
  background-color:rgba(41, 37, 36,0);
  position: fixed;
  visibility:hidden;
  top:0;
  left:0;
  z-index:99;
  animation: ${fadeIn} 1s backwards;
`

const MaskFadeIn = () =>{
  return(
    <>
      <StyledDiv />
    </>
  )
}

export default MaskFadeIn