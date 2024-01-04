import { HeroContainerStyled, HeroTextContainerStyled ,HeroImageContainerStyled, HeroInformationContainerStyled, HeroInfoCardsStyled} from "./HeroStyles";

function Hero() {
  return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
            <img src="https://airwheel-arg.com.ar/wp-content/uploads/2020/11/logo-airwheel.png" alt="" />
            <p>Rápido, práctico y sumamente resiste, nuestro Monopatín Eléctrico es la mejor forma de recorrer la ciudad. Usalo para ir al trabajo, para hacer trámites, para evitar el transporte público o simplemente para hacer un paseo divertido.</p>
            <HeroInformationContainerStyled>
              <HeroInfoCardsStyled>
                <h2>36Kg</h2>
                <p>Peso</p>
              </HeroInfoCardsStyled>
              <HeroInfoCardsStyled>
                <h2>70KM</h2>
                <p>Autonimia</p>
              </HeroInfoCardsStyled>
              <HeroInfoCardsStyled>
                <h2>80Km/h</h2>
                <p>Velocidad</p>
              </HeroInfoCardsStyled>
            </HeroInformationContainerStyled>
      
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
            <img src="https://airwheel-arg.com.ar/wp-content/uploads/2023/07/monopatin-electric-TEVERUN-BLADE-GT.jpg" alt="" />
        </HeroImageContainerStyled>
    </HeroContainerStyled>
   
  );
}

export default Hero;
