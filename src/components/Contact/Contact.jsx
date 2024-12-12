import { ButtonWhatsapp } from "../ButtonWhatsapp/Button";
import {
  ContainerContact,
  ContentInitialContact,
  Title,
  Text,
  ContentFormEmail,
  ContentTitleForm,
  ContentIcon,
  ContentTitle,
  Form,
  Input,
  Textarea,
} from "./style";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import menssage_icon from "../../assets/icons/menssage.svg";
export function Contact() {
  return (
    <ContainerContact>
      <ContentInitialContact>
        <Title>Entre em contato conosco</Title>
        <Text>
          Fale conosco e vamos conversar. Fale conosco pelo WhatsApp, telefone,
          celular ou por e-mail.
        </Text>
        <br />
        <button>
          <FaWhatsapp />
          (61) 99416-2084
        </button>
        <br />
        <button>
          <FaPhoneAlt />
          (11) 99416-2084
        </button>
      </ContentInitialContact>
      <ContentFormEmail>
        <ContentTitleForm>
          <ContentIcon>
            <img src={menssage_icon} alt="Icone de menssagem" />
          </ContentIcon>
          <ContentTitle>
            <h4>Converse com a nossa equipe</h4>
            <p>
              Preencha o formulário abaixo e receba nosso contato personalizado:
            </p>
          </ContentTitle>
        </ContentTitleForm>
        <Form>
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Assunto" />
          <Textarea placeholder="Mensagem" />
          <button>Enviar e-mail</button>
        </Form>
      </ContentFormEmail>
    </ContainerContact>
  );
}
