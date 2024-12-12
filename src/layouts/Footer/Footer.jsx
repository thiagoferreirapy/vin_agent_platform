import {
  FooterContainer,
  ContentFooter,
  FooterCard,
  Text,
  TextAlign,
  TitleCard,
  ContentRights,
} from "./style";

import logo from "../../assets/logos/logo-white.svg";
import { ButtonWhatsapp } from "../../components/ButtonWhatsapp/Button";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function Footer() {
  return (
    <FooterContainer>
      <h2>Pronto para um mundo com tecnologia?</h2>
      <ContentFooter>
        <FooterCard>
          <img src={logo} alt="" />
          <h1>Vin Agent</h1>
          <TextAlign>
            O Vin é a sua IA estratégica para o sucesso da sua empresa.{" "}
          </TextAlign>
          <br />
          <ButtonWhatsapp Label={"Quero saber mais"} />
        </FooterCard>
        <FooterCard>
          <TitleCard>Intitucional</TitleCard>
          <Text>Início</Text>
          <Text>Sobre nós</Text>
          <Text>Beneficios</Text>
          <Text>Planos</Text>
          <Text>Contato</Text>
        </FooterCard>
        <FooterCard>
          <TitleCard>Endereço/Contatos</TitleCard>
          <Text>
            {" "}
            <FaLocationDot /> Atendemos o Brasil inteiro
          </Text>
          <Text>
            {" "}
            <FaWhatsapp /> Sobre nós
          </Text>
          <Text>
            {" "}
            <FaPhoneAlt /> Beneficios
          </Text>
          <Text>
            {" "}
            <FaEnvelope /> Planos
          </Text>
        </FooterCard>
        <FooterCard>
          <TitleCard>Nossas redes sociais</TitleCard>
          <Text>
            {" "}
            <FaFacebook /> /vinagent
          </Text>
          <Text>
            {" "}
            <FaInstagram /> @vinagent
          </Text>
          <Text>
            {" "}
            <FaLinkedin /> /vinagent
          </Text>
        </FooterCard>
      </ContentFooter>
      <ContentRights>
        <TextAlign>
          2024 © Criado por Tholy Digital. Todos os direitos reservados{" "}
        </TextAlign>
        <TextAlign>Politíticas de privacidade</TextAlign>
      </ContentRights>
    </FooterContainer>
  );
}
