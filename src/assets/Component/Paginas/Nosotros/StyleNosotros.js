import styled from "styled-components";

export const ContainerNosotros= styled.div`
display: flex;
width: 100%;
height: auto;
align-items: center;
justify-content: center;
gap: 10px;

`
export const ContainerDescription= styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
height: 900px;
justify-content:center;
align-items:center;

h2{
    margin-left: -500px;
    color: white;
    font-size: 58px;
    rotate: -20deg;
    margin-top: 50px;
    @media  (max-width:1125px) {
        margin-left: -100px;
        margin-bottom: -150px;

    };
    @media (max-width:833px){
        rotate: 0deg;
    } ;
}
p{
    color: white;
    font-size: 20px;
    font-weight: 300;
}
img{
    
    position: absolute;
    width: 100%;
    height: 900px;
    z-index: -1;
    filter:grayscale(80%);
   
    
}
`