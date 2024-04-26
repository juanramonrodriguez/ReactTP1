import { CardCategoria} from "./CategoriasSyles";
import {useDispatch,useSelector} from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";

function Categoria({img, title, category}) {
  const {selectedCategory}= useSelector((state)=>state.categories);
  const dispatch =useDispatch();

  

  return (
      <CardCategoria 
      selected={category===selectedCategory}
      onClick={(e) => dispatch(selectCategory(category))}
      style={{
        opacity: category === selectedCategory ? 1 : 0.5,
        WebkitBoxReflect: category === selectedCategory ? 0:0
          ? "below 0px linear-gradient(transparent, #0003)"
          : "none",
        boxShadow: category === selectedCategory 
          ? "0 0 1px black, 0 0 1px white, 0 0 10px, 0 0 1px white"
          : "none"
      }}
      >
        <img src={img} alt={category} />
        <h2>{title}</h2>
    </CardCategoria>
  
  )
}

export default Categoria;
