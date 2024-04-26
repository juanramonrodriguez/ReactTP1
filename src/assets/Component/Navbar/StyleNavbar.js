import styled from "styled-components";


export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: white;
  justify-content: center;
  align-items: center;
  gap: 150px;
  position: fixed;
  z-index: 999;

  


  @media (max-width: 1210px) {
    gap: 10px;
  }
  @media (max-width: 590px){
    justify-content: space-around;
  
   
  
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
    @media (max-width:806px){
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
  gap: 20px;
  
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
  .btn-usuario,
  .btn-carrito{
    border: none;
    background-color: white;
    font-size: 25px;
    cursor: pointer;
  }

  @media (max-width:590px){
    .ul{
      display: flex;
      position: absolute;
      background: white;
      font-size: 20px;
      font-weight: 700;
      border: 1px solid black;
      border-radius: 10px;
      margin:0 30px ;
      top: 50px;
      width: 480px;
      height: 0px;
      opacity: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      left:-5px;
      overflow: hidden;
      transition: all .5s ease;
    }
    .ul.isActive{
      height: 300px;
      opacity: 1;
    }
    
  }
`;

export const MenuContainer = styled.div`
display: none;

@media (max-width:590px){
  display: flex;
  .hamburger {
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  background: white;
}

.hamburger-box {
  width: 180%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  
}

.hamburger-inner {
  width: 25px;
  height: 4px;
  background-color: #333;
  transition: transform 0.3s ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
  width: 25px;
  height: 4px;
  background-color: #333;
  transition: transform 0.3s ease;
}

.hamburger-inner::before {
  position: absolute;
  top: 1px;
}

.hamburger-inner::after {
  position: absolute;
  bottom: 1px;
} 


}
`
export const MenuHamburger= styled.div`
display: none;
`
export const ContainerCarrito = styled.div`

display: flex;
  width: 400px;
  height: 850px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 50px;
  opacity: 0;
  transform: translateX(500px);
  transition: all 0.6s ease-in-out;

  &.isActive{
    opacity: 1;
    transform: translate(0);
  }
`
