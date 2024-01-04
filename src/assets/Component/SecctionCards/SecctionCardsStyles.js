import styled from "styled-components"; 

export const ContainerCards = styled.div`
display: flex;
margin-top: 170px;
align-items: center;
width: 1400px;
height: auto;
gap: 100px;

`
export const CardsInfoContainer = styled.div`
position: relative;
width: 600px;
height: 250px;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
`
export const Overlay = styled.div`

position: absolute;
overflow: hidden;
top: 0;
left: 0;
width: 70%;
height: 100%;
clip-path: polygon(0 0, 50% 0, 100% 130%, 0% 100%);
background-color: #333333;
`
export const OverlayText = styled.div`
display: flex;
flex-direction: column;
align-items: start;
margin-top: 35px;
margin-left: 30px;

p{
    color: white;
}
h2{
    width: 290px;
    color: white;
    font-weight: 900;
    font-size: 22px;
}
button{
    cursor: pointer;
}

`