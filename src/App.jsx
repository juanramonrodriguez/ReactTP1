import {BrowserRouter,Routes,Route} from"react-router-dom"
import Layout from "./assets/Component/Layout/Layout"
import Hero from "./assets/Component/Hero/Hero"
import SecctionCards from "./assets/Component/SecctionCards/SecctionCards"
import Footer from "./assets/Component/Footer/Footer"
import Categorias from "./assets/Component/Categotrias/Categorias"
import ProductsDestacados from "./assets/Component/Productos-Destacados/ProductsDestacados"
import Contacto from "./assets/Component/Paginas/Contacto/Contacto"
import About from "./assets/Component/Paginas/About/About"
import NoPage from "./assets/Component/Paginas/NoPage/NoPage"
import Navbar from"./assets/Component/Navbar/Navbar"



function App() {
  
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Layout/>}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="nosotros" element={<About/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    <Navbar/>
      <Layout>
        <Hero/>
        <SecctionCards/>
        <ProductsDestacados/>
        <Categorias/>
      </Layout>
        <Footer/>

  </>
  )
}

export default App
