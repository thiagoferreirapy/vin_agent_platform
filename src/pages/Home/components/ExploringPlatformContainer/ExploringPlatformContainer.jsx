import {
  ContainerExploringPlatform,
  ContentSloganTitle,
  ContentButtons,
  Title,
  Text,
  ContentCardsPlatform,
  ContentCards,
  TitleContent,
  Card,
  ImgCard,
  TitleCard,
  TextCard,
} from "./style";

import img_primary from "../../../../assets/images/img-pginit.svg";
import { ButtonWhatsapp } from "../../../../components/ButtonWhatsapp/Button";
export function ExploringPlatform() {
  return (
    <ContainerExploringPlatform>
      <ContentSloganTitle>
        <Title>
          Maximize o Potencial da Sua Empresa: Conte com o Vin para construir
          confiança e transformar feedbacks em ações inspiradoras!
        </Title>
        <Text>
          Fortaleça o impacto da sua empresa com o Vin! Ele aprende com seus
          documentos, dados e processos para oferecer respostas precisas e
          estratégicas. O Vin transforma informações em ações inteligentes,
          promovendo eficiência, credibilidade e confiança em cada interação.
          Uma solução segura e personalizada para impulsionar o sucesso do seu
          negócio.
        </Text>
      </ContentSloganTitle>
      <ContentButtons>
        <button className="support">Fale com o suporte 24h</button>
        <button className="flat">Quero ser um parceiro</button>
      </ContentButtons>
      <ContentCardsPlatform>
        <TitleContent>Entenda o Vin Agent</TitleContent>
        <ContentCards>
          <Card>
            <span>Passo1</span>
            <ImgCard src={""} alt="Imagem do card de como usar o Vin Agent" />
            <TitleCard>Carregue sua Documentação</TitleCard>
            <TextCard>
              Carregue documentos como FAQs, manuais e guias internos para o
              Vin. Ele interpreta essas informações e se prepara para responder
              suas dúvidas de forma eficiente.
            </TextCard>
          </Card>
          <Card>
            <span>Passo 2</span>
            <ImgCard src={""} alt="Imagem do card de como usar o Vin Agent" />
            <TitleCard>Treinamento Personalizado</TitleCard>
            <TextCard>
              O Vin analisa os documentos e treina seu modelo de IA para
              entender os processos, dados e operações da sua empresa. Ele se
              adapta automaticamente às atualizações na documentação.
            </TextCard>
          </Card>
          <Card>
            <span>Passo 3</span>
            <ImgCard src={""} alt="Imagem do card de como usar o Vin Agent" />
            <TitleCard>Conecte e Interaja</TitleCard>
            <TextCard>
              Acesse o Vin via portal web ou aplicativo e comece a usar. Faça
              perguntas sobre dados, solicite relatórios ou consulte processos
              de forma simples, como se estivesse conversando com um colega.
            </TextCard>
          </Card>
          <Card>
            <span>Passo 4</span>
            <ImgCard src={""} alt="Imagem do card de como usar o Vin Agent" />
            <TitleCard>Atualize e Melhore</TitleCard>
            <TextCard>
              Mantenha o Vin atualizado com novos documentos e dados. Ele
              aprende continuamente, garantindo respostas cada vez mais precisas
              e alinhadas às necessidades do seu negócio.
            </TextCard>
          </Card>
        </ContentCards>
      </ContentCardsPlatform>
    </ContainerExploringPlatform>
  );
}
