import { MenuContainer, NavbarContainer, NavbarLinks, NavbarLogo, NavbarUsuario } from "./NavbarStyles";
import { FaUser, FaShoppingCart,  } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Outlet, Link } from "react-router-dom";


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
          <Link to="/">INICIO</Link>
          </li>
          <li>
           <Link to="contacto">CONTACTO</Link>
          </li>
          <li>
           <Link to="about">NOSOTROS</Link>
          </li>
          <li>
            PRODUCTOS
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
<Outlet/>
      
</>
  );
}



export default Navbar;
