import { NavbarContainer, NavbarInfo, NavbarLogo, NavbarUsuario } from "./NavbarStyles";
import { FaUser, FaShoppingCart } from "react-icons/fa";
function Navbar() {
  return (
<NavbarContainer>
  <NavbarLogo>
    <img src="https://airwheel-arg.com.ar/wp-content/uploads/2020/11/logo-airwheel.png" alt="" />
  </NavbarLogo>
  <NavbarInfo>
    <ul>
      <li>INICIO</li>
      <li>PRODUCTOS</li>
      <li>CONTACTO</li>
    </ul>
  </NavbarInfo>
  <NavbarUsuario>
  <FaUser style={{fontSize:"25px", cursor:"pointer"}}/>
  <FaShoppingCart style={{fontSize:"25px", cursor: "pointer"}}/>
  </NavbarUsuario>
</NavbarContainer>
  )
}

export default Navbar;
