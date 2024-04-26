import styled from "styled-components"

export const LayoutWrapper = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
align-items: center; 

&.isActiveFilter{
    filter: blur(5px);
}
`

