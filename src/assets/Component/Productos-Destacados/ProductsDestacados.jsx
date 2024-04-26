import { CardProductDestacado, CardsContainer, ProductosDesacadosTitulo, ProductosDestacados } from "./ProductsDestacadosStyles";
import {useSelector} from "react-redux"



function ProductsDestacados() {
  const {recommended}= useSelector((state)=> state.recommended)
  // const productosDestacados = productos.filter((producto) => producto.id === 1 || producto.id === 4);
  return (
    <ProductosDestacados>
        <ProductosDesacadosTitulo>
        <h2>PRODUCTOS DESTACADOS</h2>
        </ProductosDesacadosTitulo>
        <CardsContainer>
        {recommended.map((producto) => (
          <CardProductDestacado key={producto.id}>
            <h2>{producto.title}</h2>
            <img src={producto.img} />
            <p>MODELO: {producto.modelo}</p>
            <h3>US$: {producto.price}</h3>
          </CardProductDestacado>
        ))}
        </CardsContainer>
    </ProductosDestacados>
  );
}

export default ProductsDestacados;
