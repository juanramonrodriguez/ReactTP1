import { CardProductDestacado, CardsContainer, ProductosDesacadosTitulo, ProductosDestacados } from "./ProductsDestacadosStyles";
import { productos } from "../Data/productos";



function ProductsDestacados() {
  const productosDestacados = productos.filter((producto) => producto.id === 1 || producto.id === 4);
  return (
    <ProductosDestacados>
        <ProductosDesacadosTitulo>
        <h2>PRODUCTOS DESTACADOS</h2>
        </ProductosDesacadosTitulo>
        <CardsContainer>
        {productosDestacados.map((producto) => (
          <CardProductDestacado key={producto.id}>
            <h2>{producto.title}</h2>
            <img src={producto.img} />
            <p>MODELO: {producto.modelo}</p>
            <h3>US$: {producto.price}</h3>
          </CardProductDestacado>
        ))}
           
          
            {/* <h2>"Monopatin Eléctrico Dualtron Mini</h2>
            <img src="https://airwheel-arg.com.ar/wp-content/uploads/2022/03/monopatin-electrico-dualtron-mini-alu-1.jpg" alt="" />
            <p>MODELO: 13 AH</p>
            <h3>US$ 1550</h3>
        </CardProductDestacado> 
        <CardProductDestacado>
            <h2>"Moto Eléctrica Surron Light Storm</h2>
            <img src="https://airwheel-arg.com.ar/wp-content/uploads/2022/11/Moto-Electrica-Surron-Light-Bee-Storm.jpg" alt="" />
            <p>Bee F</p>
            <h3>US$ 12500</h3> */}
        </CardsContainer>
    </ProductosDestacados>
  );
}

export default ProductsDestacados;
