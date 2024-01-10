
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
  @media (max-width: 590px){
    justify-content: center;
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
    @media (max-width:590px){
      img{
        display: flex;
      }
    }
`;

export const NavbarLinks = styled.div`
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
  @media (max-width:590px){
    display: none;
  }
`;

export const NavbarUsuario = styled.div`
  display: flex;
  gap: 10px;
  @media(max-width: 590px){
    display: none;
  }
`;

export const MenuContainer = styled.div`
display: none;
width: auto;
height: auto;
@media (max-width:590px){
  display: flex;

}
`
