import {
  ContainerAbout,
  ContentSloganTitle,
  Title,
  Text,
  ContentCardsText,
  ContentCard,
  TitleCard,
} from "./style";

import img_primary from "../../../../assets/images/img-pginit.svg";
import { ButtonWhatsapp } from "../../../../components/ButtonWhatsapp/Button";
export function About() {
  return (
    <ContainerAbout>
      <ContentSloganTitle>
        <Title>Porque o Vin?</Title>
        <Text>
          O Vin Agent é uma plataforma de IA personalizada que utiliza
          documentação específica da empresa para fornecer respostas rápidas
          sobre processos, dados e operações. Ideal para suporte, ajuda a
          melhorar a transparência e otimizar decisões empresariais.
        </Text>
      </ContentSloganTitle>
      <ContentCardsText>
        <ContentCard>
          <TitleCard>Totalmente gratuita</TitleCard>
          <Text>
            Desfrute de um plano totalmente gratuito sem se preocupar com
            pagamentos, onde você pode aproveitar todas as funcionalidades do
            Vin sem custos.
          </Text>
        </ContentCard>
        <ContentCard>
          <TitleCard>Eficiência no Suporte</TitleCard>
          <Text>
            Resolva dúvidas rapidamente sobre processos e operações da empresa
            com o Vin, garantindo suporte instantâneo e maior eficiência para a
            equipe.
          </Text>
        </ContentCard>
        <ContentCard>
          <TitleCard>Tomada de Decisões Inteligentes</TitleCard>
          <Text>
            Obtenha insights em tempo real com o Vin, transformando dados
            críticos em decisões estratégicas e aumentando a transparência nas
            operações.
          </Text>
        </ContentCard>
      </ContentCardsText>
      <ButtonWhatsapp Label={"Descubra o poder do Vin para a sua empresa"} />
    </ContainerAbout>
  );
}
