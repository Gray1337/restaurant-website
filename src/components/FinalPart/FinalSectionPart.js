import styled from 'styled-components';
import Container from '../Common/Container';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const Box = styled.div`
display: flex;
flex-flow:column nowrap;
width: 100%;
margin-top: 100px;
@media (min-width:681px){
  margin-top: 160px;
}
`;
const FinalSection =styled.div`
  display:flex;
  flex-flow:column nowrap;
  width:100%;
  @media (min-width:1365px){
    flex-flow:row nowrap;
  }
  a{
    @media (min-width:1365px){
      margin-right:32px;
    }
    &:last-child{
      margin-right:0px;
    }
  }
`
const FinalBox = styled.div`
  width:100%;
  display:flex;
  flex-flow:row nowrap;
  border:1px solid rgb(225,225,225);
  height:104px;
  margin-bottom:32px;
  @media (min-width:1365px){
    margin-bottom:0px;
  }
`
const FinalItem = styled.div`
  width:40%;
  overflow:hidden;
  position: relative;
`
const PreviewImg = styled.div`
  width:100%;
  padding-top:100%;
  background-image: ${props => `url(${props.src})`};
  background-position:center;
  background-repeat: no-repeat;
  background-size:cover;
`
const FinalContent = styled.div`
  padding:24px;
  width:60%;
  margin:auto;
  h1{
    margin:0;
  }
`
const FinalSectionPart = ({addressFirst, addressSec, imgSrcFirst, imgSrcSec, titleFirst, titleSec}) =>{
  return(
    <Container>
      <Box>
        <FinalSection>
          <Link to={addressFirst} style={{width:'100%'}}>
            <FinalBox>
              <FinalItem>
                <PreviewImg src={imgSrcFirst}></PreviewImg>
              </FinalItem>
              <FinalContent >
                <h1>{titleFirst}</h1>
              </FinalContent>
            </FinalBox>
          </Link>
          <Link to={addressSec} style={{width:'100%'}}>
            <FinalBox>
              <FinalItem>
                <PreviewImg src={imgSrcSec}></PreviewImg>
              </FinalItem>
              <FinalContent >
                <h1>{titleSec}</h1>
              </FinalContent>
            </FinalBox>
          </Link>
        </FinalSection>
      </Box>
    </Container>
  )

}
export default FinalSectionPart