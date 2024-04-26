

import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Categorias from "../../Categotrias/Categorias";
import { CardProduct, Container, ContainerCardProducts, Titulo, ContainerImg } from "./StyleProductos";
import { getProducts } from "../../../redux/products/productsSlice";


function Productos() {
  const productRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  }

  const { products } = useSelector((state) => state.products);

  const filteredProducts = selectedCategory
    ? products.filter((prod) => prod.category === selectedCategory)
    : products;

  return (
    <>
      <Container>
        <Categorias onSelectCategory={handleSelectCategory} />
        <Titulo ref={productRef}>
          <h1>CATALOGO</h1>
        </Titulo>
        <ContainerCardProducts>
          {filteredProducts.map((prod) => (
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

export default Productos;