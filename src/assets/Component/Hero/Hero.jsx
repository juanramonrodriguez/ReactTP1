import { HeroContainerStyled, HeroTextContainerStyled ,HeroImageContainerStyled, HeroInformationContainerStyled, HeroInfoCardsStyled} from "./HeroStyles";

function Hero() {
  return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
        <HeroImageContainerStyled>
            <img className="title" src="https://airwheel-arg.com.ar/wp-content/uploads/2020/11/logo-airwheel.png" alt="" />
            <p>Rápido, práctico y sumamente resiste, nuestro Monopatín Eléctrico es la mejor forma de recorrer la ciudad. Usalo para ir al trabajo, para hacer trámites, para evitar el transporte público o simplemente para hacer un paseo divertido.</p>
        </HeroImageContainerStyled>
            <img src="https://airwheel-arg.com.ar/wp-content/uploads/2023/07/monopatin-electric-TEVERUN-BLADE-GT.jpg" alt="" />
        </HeroTextContainerStyled>
            <HeroInformationContainerStyled>
              <HeroInfoCardsStyled className="card1">
                <h2>36Kg</h2>
                <p>Peso</p>
              </HeroInfoCardsStyled>
              <HeroInfoCardsStyled className="card2">
                <h2>70KM</h2>
                <p>Autonimia</p>
              </HeroInfoCardsStyled>
              <HeroInfoCardsStyled className="card3">
                <h2>80Km/h</h2>
                <p>Velocidad</p>
              </HeroInfoCardsStyled>
            </HeroInformationContainerStyled>
    </HeroContainerStyled>
   
  );
}

export default Hero;
