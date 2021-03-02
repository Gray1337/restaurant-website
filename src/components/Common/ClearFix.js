import styled from 'styled-components'

const ClearFix = styled.div`
    /* height:${props => props.height || '100px'}; */
    height:80px;
    @media (min-width:1365px){
        height:100px;        
    }
`

export default ClearFix