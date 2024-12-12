import { ButtonWhatsapp } from "../../../../components/ButtonWhatsapp/Button";
import {
  ContainerInitialHome,
  ContentSloganTitle,
  Title,
  Text,
  ContentImage,
} from "./style";

import img_primary from "../../../../assets/images/img-pginit.svg";
export function InitialHome() {
  return (
    <ContainerInitialHome>
      <ContentSloganTitle>
        <Title>
          Maximize o Potencial da Sua Empresa: Conte com o Vin para construir
          confiança e transformar feedbacks em ações inspiradoras!
        </Title>
        <Text>
          O Vin, nossa inteligência artificial, é projetado para apoiar o seu
          sucesso. Ele aprende continuamente, conectando experiências e insights
          para promover transparência, confiança e visibilidade.{" "}
        </Text>
        <ButtonWhatsapp Label={"Entre em contato"} />
      </ContentSloganTitle>
      <ContentImage>
        <img src={img_primary} alt="teste" />
      </ContentImage>
    </ContainerInitialHome>
  );
}
