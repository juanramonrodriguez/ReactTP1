

// 
import { NavbarContainer, NavbarLogo, NavbarLinks, MenuContainer, ContainerCarrito } from "./StyleNavbar";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { LayoutWrapper } from "../Layout/LayoutStyles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carritoOpen, setCarritoOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(!menuOpen);
    if (carritoOpen) {
      setCarritoOpen(false);
    }
  };

  const openCarrito = () => {
    setCarritoOpen(!carritoOpen);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <NavbarContainer>
        <MenuContainer>
          <button
            onClick={openMenu}
            className={`hamburger hamburger ${menuOpen ? "isActive" : ""}`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </MenuContainer>
        <NavbarLogo>
          <img src="https://airwheel-arg.com.ar/wp-content/uploads/2020/11/logo-airwheel.png" alt="" />
        </NavbarLogo>
        <NavbarLinks className={menuOpen ? "isActive" : ""}>
          <ul className={`ul ${menuOpen ? "isActive" : ""}`} onClick={closeMenu}>
            <li>
              <Link to="/">inicio</Link>
            </li>
            <li>
              <Link to="productos">Productos</Link>
            </li>
            <li>
              <Link to="contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
          </ul>
          <button className="btn-usuario">
            <FaUser />
          </button>
          <button onClick={openCarrito} className="btn-carrito">
            <FaShoppingCart />
          </button>
        </NavbarLinks>
        <ContainerCarrito className={carritoOpen ? "isActive" : ""}>
          <p>carrito</p>
        </ContainerCarrito>
      </NavbarContainer>
      <LayoutWrapper className={(menuOpen || carritoOpen) ? "isActiveFilter" : ""}>
        <Outlet />
      </LayoutWrapper>
      
    </>
  );
};

export default Navbar;