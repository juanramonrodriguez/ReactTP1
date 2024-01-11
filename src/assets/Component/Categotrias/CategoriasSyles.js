
import styled from "styled-components";
 


export const CategoriasWrapper = styled.div`
display: flex;
margin-bottom: 40px;
flex-direction: column;
text-align: center;
width: auto;
height: auto;
`
export const CategoriasTitle = styled.div`
display: flex;
width:100%;
height:auto;
justify-content: center;
text-align: center;
h2{
    font-weight: 700;
}
`

export const CategoriasContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: auto;
margin: 50px 0;
justify-content: center;
align-items: center;
gap: 50px;

`

export const CardCategoria = styled.div`
display: flex;
width: 300px;
cursor: pointer;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
opacity: 0.7;

&:hover {
    
    opacity: 1;
    -webkit-box-reflect: below
    1px linear-gradient(transparent, #0003);
    box-shadow: 0 0 1px white , 0 0 1px white ,
    0 0 5px , 0 0 10px white
}

img{
    width: 90px;
    height: 90px;
}
`