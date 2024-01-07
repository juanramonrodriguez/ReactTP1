
import styled from "styled-components";


export const ProductosDestacados = styled.div`
margin: 100px 0;
display: flex;
flex-direction: column;
text-align: center;
width: auto;
height: auto;
gap: 50px;


`;

export const ProductosDesacadosTitulo = styled.div`
h2{
    font-size: 30px;
    font-weight: 800;
}

`
export const CardsContainer= styled.div`
display: flex;
gap: 100px;
@media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    
}
`

export const CardProductDestacado = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  height: 400px;
  text-align: center;
  border: 2px solid #e6621f;
  box-shadow: 1px 1px 20px 2px black;
  
  
  
  img{
      width: 200px;
      height: 200px;
    }
    P{
        font-weight: 900;
    }
    `;
    
   
      
    