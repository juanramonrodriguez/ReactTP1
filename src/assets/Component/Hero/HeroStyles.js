import styled from "styled-components";

export const HeroContainerStyled = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
max-width: 1200px;
margin-top: 100px;
gap: 30px;
`
export const HeroTextContainerStyled= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 50%;
img{
    width: 500px;
    height: 80px;
}
p{
    font-size: 1.5rem;
    
}
`
export const HeroImageContainerStyled= styled.div`
width: 70%;
img{
    width: 100%;
    padding-bottom: 80px;
}`


export const HeroInformationContainerStyled= styled.div`
display: flex;
width:600px;
margin-top: 100px;
justify-content: center;
gap: 50px;

`
export const HeroInfoCardsStyled= styled.div`
width: 120px;
height: 120px;
background-color:#e6621f ;
color: black;
align-items: center;
text-align: center;
border-radius: 10px;
border: 1px solid gray;

`
