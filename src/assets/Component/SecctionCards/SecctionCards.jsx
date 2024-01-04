import React from 'react';
import { CardsInfoContainer, ContainerCards, Overlay, OverlayText,  } from './SecctionCardsStyles';

function SecctionCards() {
  return (
   <ContainerCards>
   <CardsInfoContainer>
    <img src="https://www.murcia.com/noticias/fotos/1117553558w2.jpg" alt="" />
    <Overlay>
      <OverlayText>
        <p>Estamos en Cordoba</p>
        <h2>VISITÁ NUESTRO SHOWROOM</h2>
        <button>CORDINA TU VISITA POR WHATSAPP</button>
      </OverlayText>
    </Overlay>
   </CardsInfoContainer>
   <CardsInfoContainer>
    <img src="https://www.emesa-m30.es/wp-content/uploads/2022/05/normativa-patinetes-ele%CC%81ctricos-dgt-2022.jpg" alt="" />
    <Overlay>
      <OverlayText>
        <p>Te ayudamos a elegir</p>
        <h2>EL MONOPATIN QUE ESTÁS BUSCANDO</h2>
        <button>CONTACTANOS POR WHATSAPP</button>
      </OverlayText>
    </Overlay>
   </CardsInfoContainer>
   </ContainerCards>
  );
}

export default SecctionCards;
