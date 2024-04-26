// import { Container, Titulo,ContainerCardProducts, CardProduct, ContainerImg } from "./StyleProductos";
// import {CategoriasWrapper} from "../../Categotrias/CategoriasSyles"
// function Producto(product){
//   return (
//     <>
//      <Container>
//          <CategoriasWrapper doScroll={doScroll} onSelectCategory={setSelectedCategory} />
//          <Titulo ref={product}>
//            <h1>CATALOGO</h1>
//          </Titulo>
//          <ContainerCardProducts>
//            {filterProducts.map((prod) => (
//              <CardProduct key={prod.id}>
//                <h2>{prod.title}</h2>
//                <ContainerImg>
//                  <img className="img1" src={prod.img} alt={prod.title} />
//                  <img className="img2" src={prod.img2} alt={prod.title} />
//                </ContainerImg>
//                <p>MODELO: {prod.modelo}</p>
//                <h3>US$: {prod.price}</h3>
//                <button onClick={(e) => e.preventDefault()}>Agregar al carro</button>
//              </CardProduct>
//            ))}
//          </ContainerCardProducts>
//        </Container>
      
//     </>
//   );
// }

// export default Producto;

import React from "react";
import { Container, Titulo, ContainerCardProducts, CardProduct, ContainerImg } from "./StyleProductos";
import { Products } from "../../Data/Products";

function Producto() {
  const filterProducts = Products;
  
  return (
    <>
      <Container>
        <Titulo>
          <h1>CATALOGO</h1>
        </Titulo>
        <ContainerCardProducts>
          {filterProducts.map((prod) => (
            <CardProduct key={prod.id}>
              <h2>{prod.title}</h2>
              <ContainerImg>
                <img className="img1" src={prod.img} alt={prod.title} />
                <img className="img2" src={prod.img2} alt={prod.title} />
              </ContainerImg>
              <p>MODELO: {prod.modelo}</p>
              <h3>US$: {prod.price}</h3>
              <button onClick={(e) => e.preventDefault()}>Agregar al carro</button>
            </CardProduct>
          ))}
        </ContainerCardProducts>
      </Container>
    </>
  );
}

export default Producto;