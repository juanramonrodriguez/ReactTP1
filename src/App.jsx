
import Layout from "./assets/Component/Layout/Layout"
import Navbar from "./assets/Component/Navbar/Navbar"
import Hero from "./assets/Component/Hero/Hero"
import Footer from "./assets/Component/Footer/Footer"
import ProductsDestacados from "./assets/Component/Productos-Destacados/ProductsDestacados"
import SecctionCards from "./assets/Component/SecctionCards/SecctionCards"
import{BrowserRouter, Routes, Route}from "react-router-dom"
import Contacto from "./assets/Component/Paginas/Contacto/Contacto"
import Nosotros from "./assets/Component/Paginas/Nosotros/Nosotros"
import NoPage from "./assets/Component/Paginas/NoPage/NoPage"
import Productos from "./assets/Component/Paginas/Productos/Productos"
import Categorias from "./assets/Component/Categotrias/Categorias"



function App() {
 
  return (
    <>
  <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route index element={<>
      <Layout>
      <Hero/>
      <SecctionCards/>
      <ProductsDestacados/>
      </Layout>
      </>}/>
        <Route path='contacto' element={<Contacto/>}/>
        <Route path='nosotros'element={<Nosotros/>}/>
        <Route path='productos' element={<Productos/>}/>
        <Route path='*' element={<NoPage/>}/>
      
    </Routes>
  </BrowserRouter>
      <Footer />
    </>
  )
}

export default App