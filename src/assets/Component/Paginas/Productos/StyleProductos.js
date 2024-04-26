import styled from "styled-components";


export const Container= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Titulo= styled.div`
h1{
    color:  black;
}
`
export const ContainerCardProducts= styled.div`
display: flex;
width: 800px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 70px 50px;
margin: 100px 0px;
@media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    width: auto;
    
}
`
export const CardProduct= styled.div`
 border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  height: 400px;
  text-align: center;
  border: 2px solid #e6621f;
  box-shadow: 1px 1px 20px 2px black;
  
  
  
  
  
  button{
      width: 180px;
      height: 40px;
      font-weight: 600;
      font-size: 17px;
      background: #ff5900;
      color: black;
      align-items: center;
      border: 1px solid #66da4300;
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.2s;
      cursor: pointer;
    }
    button:hover {
        border: 2px solid #ff5900;
        background:white;
        color: #ff5900;
    }
    
    
    
    `
export const ContainerImg= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
    width: 200px;
    height: 200px;
    transition: 0.7s ease-in-out;
   
   
}
.img2{
   margin-top: -200px;
   opacity: 0;

}
img:hover{
   opacity: 1;
}
`