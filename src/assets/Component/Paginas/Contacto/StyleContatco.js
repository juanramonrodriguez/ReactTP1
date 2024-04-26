import styled from "styled-components";

 export const ContainerFormStyled= styled.div`
 display: flex;
align-items: center;
justify-content: center;
width:100%;
height: 950px;

img{
   width: 50%;
}
@media (max-width: 700px){
  

    img{
        margin-top: 100px;
    }
    }
    @media (max-width:590px){
      height: 600px;
    }
`

export const FormStyled= styled.div`
position: absolute;
 form {
  display: flex;
  margin-top: 50px 0;
  align-items: center;
  flex-direction: column;
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
  gap: 10px;
  border-radius: 2em;
  padding: 30px;
  width: 100%;
  height: 350px;
  
 
}

form::before {
  content: '';
  height: 358px;
  width: 309px;
  position: absolute;
  margin-top: -34px;
  margin-left: px;
  z-index: -1;
  border-radius: 2.7em;
}

button {
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  background: #ff5900;
  color: black;
  padding: 0.7em 5.5em;
  display: flex;
  align-items: center;
  border: 2px solid #66da4300;
  border-radius: 5em;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}

button:hover {
  border: 2px solid #ff5900;
  background: #00000000;
  color: #ff5900;
}

button:active {
  border: 2px solid #66da4300;
  background: #ff5900;
  color: black;
}

input {
  width: calc(100% - 10px);
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #66da4300;
  border-bottom: 1px solid #ff5900;
  outline: none;
  background-color: transparent;
  color: #ff5900;
  font-family: Arial, Helvetica, sans-serif;
  transition: 0.2s;
}

input:focus {
  border: 1px solid #66da4300;
  border-bottom: 1px solid #ff5900;
  background-color: transparent;
  color: black;
}

input::placeholder {
  color: #9b725b;
}

textarea {
  font-family: Arial, Helvetica, sans-serif;
  width: calc(100% - 10px);
  padding: 8px;
  height: 100px;
  margin-bottom: 20px;
  border: 1px solid #66da4300;
  border-bottom: 1px solid #ff5900;
  outline: none;
  background-color: transparent;
  color: black;
}
textarea::placeholder {
  color: black;
}

textarea:focus {
  border: 1px solid #66da4300;
  border-bottom: 1px solid #ff5900;
  background-color: transparent;
  color: black;
}
 `