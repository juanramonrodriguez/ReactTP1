import {categorias} from "../Data/categorias"
import {CategoriasContainer, CategoriasTitle, CategoriasWrapper} from "./CategoriasSyles";
import Categoria  from "./Categoria";
function Categorias() {
  return (
    <>
    <CategoriasWrapper>
      <CategoriasTitle>
        <h2>Que estas buscando?</h2>
      </CategoriasTitle>
      <CategoriasContainer>
        {categorias.map(cat =>(
          <Categoria key={cat.id}{...cat}/>        
          ))}         
      </CategoriasContainer>
    </CategoriasWrapper>
    
    </>
      
  );
}

export default Categorias;
