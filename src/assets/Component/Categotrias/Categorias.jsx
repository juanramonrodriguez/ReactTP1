
import React from "react";
import { CategoriasContainer, CategoriasTitle, CategoriasWrapper, CardCategoria } from "./CategoriasSyles";
import { categorias } from "../Data/categorias";
import Categoria from "./Categoria";

function Categorias({ onSelectCategory, selectedCategory }) {
  const handleClick = (category) => {
    onSelectCategory(category);
    
  };

  return (
    <>
      <CategoriasWrapper>
        <CategoriasTitle>
          <h2>¿Qué estás buscando?</h2>
        </CategoriasTitle>
        <CategoriasContainer>
          {categorias.map((categoria) => (
            <CardCategoria
              key={categoria.id}
              onClick={() => handleClick(categoria.category)} 
              selected={selectedCategory === categoria.category}
            >
              <Categoria {...categoria} />
            </CardCategoria>
          ))}
        </CategoriasContainer>
      </CategoriasWrapper>
    </>
  );
}

export default Categorias;
