import Navbar from "./assets/Component/Navbar/Navbar"
import Layout from "./assets/Component/Layout/Layout"
import Hero from "./assets/Component/Hero/Hero"
import SecctionCards from "./assets/Component/SecctionCards/SecctionCards"
import Footer from "./assets/Component/Footer/Footer"
import Productos from "./assets/Component/Products/CardsProductos"
import Categorias from "./assets/Component/Categotrias/Categorias"
import ProductsDestacados from "./assets/Component/Productos-Destacados/ProductsDestacados"


function App() {
  
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <SecctionCards/>
        <ProductsDestacados/>
      </Layout>
        <Footer/>

    </>
  )
}

export default App
