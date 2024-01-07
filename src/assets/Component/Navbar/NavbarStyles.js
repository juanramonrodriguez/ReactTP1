/*import styled from "styled-components";


export const NavbarContainer = styled.div`
display: flex;
width: 100%;
background-color: green;
justify-content: center;
align-items: center;
gap: 200px;
position: fixed;

@media (max-width:1210px){
    gap: 50px;
    margin: 0;
    padding: 0;
}
`
export const NavbarLogo = styled.div`
img{
    width: 240px;
    height: 30px;
}
img:hover{
    filter: drop-shadow(10px 8px 6px black);
}
`
export const NavbarInfo = styled.div`
display: flex;
background-color: blue;
ul{
    display: flex;
    gap: 30px;
}
li{
    cursor: pointer;
}
li:hover{
    border-bottom: 1px solid black;
}
`
export const NavbarUsuario = styled.div`
display: flex;
background-color: gray;
gap: 20px;


`*/

import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  gap: 150px;
  position: fixed;

  @media (max-width: 1210px) {
    gap: 10px;
  }
  `;

export const NavbarLogo = styled.div`
  img {
      width: 240px;
      height: 30px;
    }
    img:hover {
        filter: drop-shadow(10px 8px 6px black);
    }
    @media (max-width:690px){
    img{
       display: none;
    }
    }
`;

export const NavbarInfo = styled.div`
  display: flex;
  
  ul {
    display: flex;
    gap: 30px;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    border-bottom: 1px solid black;
  }

  @media (max-width: 600px) {
    ul {
      flex-direction: row;
    }
  }
  @media (max-width:592px){
    
  }
`;

export const NavbarUsuario = styled.div`
  display: flex;
  gap: 10px;
`;
