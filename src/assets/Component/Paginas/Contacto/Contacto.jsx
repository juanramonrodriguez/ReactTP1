
import { ContainerFormStyled, FormStyled} from "./StyleContatco";

function Contacto() {
  return (
    <>
   <ContainerFormStyled>
    <img src="https://rodarelectric.com/wp-content/uploads/2021/04/Kiri-M10-1-1024x1024.jpg" alt="" />
    <FormStyled>
    <form className="ContainerForm">
      <input className="input" type="text"placeholder="Nombre" />
      <input className="input" type="text"placeholder="E-Mail" />
      <textarea className="textarea" placeholder="Escriba su consulta"></textarea>
      <center><button className="button">Enviar</button></center>
    </form>
    </FormStyled>
   </ContainerFormStyled>
    </>
  );
}

export default Contacto;
