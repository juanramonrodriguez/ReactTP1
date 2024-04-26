import styled from "styled-components";

export const HeroContainerStyled = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
justify-content: center;
align-items: center;
margin-top: 100px;
padding: 30px;
gap: 10px;


@media (max-width:930px){
   
}

`
export const HeroImageContainerStyled= styled.div`
display: flex;
flex-direction: column;
.title{
    width: 500px;
    height: 100px;
}
@media (max-width:940px){
    align-items: center;
}
    

`
export const HeroTextContainerStyled= styled.div`
display: flex;
justify-content: center;
align-items:center;
max-width: 1200px;
height: auto;
gap: 10px;
padding: 20px;

    img{
    width: 500px;
    height: 500px;
    }
    p{
        font-size: 1.5rem;
        
    }
    @media (max-width:1043px){
        img{
            width: 400px;
            height: 400px;
        }
    }
    @media (max-width:940px){
        flex-direction: column;
    }


`

export const HeroInformationContainerStyled= styled.div`

display: flex;
width:600px;
margin-top: -100px;
justify-content: center;
gap: 50px;
.card2{
    margin-top:50px;
}
.card3{
    transform: translateY(150px);
}
@media (max-width:1060px){
margin-top: 0;
}

`
export const HeroInfoCardsStyled= styled.div`
width: 140px;
height: 130px;
background-color:#333333 ;
color: white;
border: 2px solid #e6621f;
align-items: center;
text-align: center;
border-radius: 10px;


`
