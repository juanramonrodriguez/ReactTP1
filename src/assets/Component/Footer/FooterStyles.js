import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
background-color: #333333;
`
export const FooterRedes = styled.div`
width: 100%;
height: auto;
text-align: center;
border-bottom: 1px solid black;
margin-bottom: 20px;
h2{
    font-size: 25px;
    color: white;
}
`
export const IconosRedes = styled.div`
display: flex;
width: auto;
height: auto;
justify-content: center;
margin-bottom: 10px;
gap: 15px;

a{
    cursor: pointer;
    background-color: white;
    border-radius: 20px;
}
a:hover{
    transform: scale(120%);
}
`
export const FooterInfo = styled.div`
display: flex;
width: 100%;
height: auto;
justify-content: center;
gap: 120px;
flex-wrap: wrap;

`
export const SectionInfoFooter = styled.div`
display: flex;
flex-direction: column;
align-items: start;
margin-bottom: 10px;
button{
    display: flex;
    cursor: pointer;
    width: 220px;
    height: 37px;
    border-radius: 10px;
    background-color: green;
    border: 1px solid white;
    color: white;
    align-items: center;
    gap: 12px;
    font-size: 17px;
}
p{
    font-size: 22px;
    color: white;
}
img{
    margin-top: 40%;
}
@media (max-width: 593px){
        img{
            display: none;
        }
    }
li{
    font-size: 18px;
    cursor: pointer;
    
}
ul{
display: flex;
flex-direction: column;
gap: 12px;
padding: 0px ;
margin-top: -10px;
color: white;
}
h2{
    color: white;
}
`