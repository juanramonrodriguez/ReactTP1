import {NavbarContainer, NavbarLogo, NavbarLinks, NavbarUsuario, MenuContainer}from"./StyleNavbar"
import { FaUser, FaShoppingCart,  } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";



function Navbar() {
  return (
    <>
<NavbarContainer>
  <NavbarLogo>
    <img src="https://airwheel-arg.com.ar/wp-content/uploads/2020/11/logo-airwheel.png" alt="" />
  </NavbarLogo>
  <NavbarLinks>
    <ul>
      <li>
        Inicio
      </li>
      <li>
        Contacto
      </li>
      <li>
        Nosotros
      </li>
    </ul>
  </NavbarLinks>
  <NavbarUsuario>
  <FaUser style={{fontSize:"25px", cursor:"pointer"}}/>
  <FaShoppingCart style={{fontSize:"25px", cursor: "pointer"}}/>
  </NavbarUsuario>
  <MenuContainer>
  <TiThMenu style={{ fontSize:"25px", cursor:"pointer"}}/>
  </MenuContainer>
</NavbarContainer>

    </>
  )
}

export default Navbar;

