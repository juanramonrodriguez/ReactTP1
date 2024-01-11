import { CardCategoria
 } from "./CategoriasSyles";

function Categoria({img, title, category}) {
  return (
   

      <CardCategoria>
        <img src={img} alt={category} />
        <h2>{title}</h2>
    </CardCategoria>
   
  )
}

export default Categoria;
