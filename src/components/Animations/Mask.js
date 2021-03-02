import styled, { keyframes } from 'styled-components';
const left = keyframes`
  0%{
    width:100%;
  }
  100%{
    width:0%;
  }
`
const right = keyframes`
  0%{
    width:100%;
  }
  100%{
    width:0%;
  }
`
const StyledDivL = styled.div`
  width:100%;
  height:50%;
  opacity:1;
  background-color:#292524;
  position: fixed;
  top:0;
  left:0;
  z-index:19;
  animation: ${left} 0.8s 1.2s forwards;
`
const StyledDivR = styled.div`
  width:100%;
  height:50%;
  opacity:1;
  background-color:#292524;
  position: fixed;
  bottom:0;
  right:0;
  z-index:19;
  animation: ${right} 0.8s 1.7s forwards;
`

const Mask = () =>{
  return(
    <>
      <StyledDivL />
      <StyledDivR />
    </>
  )
}

export default Mask