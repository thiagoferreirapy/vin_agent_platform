import styled from "styled-components";

const Button = styled.a`
  color: ${(props) => props.theme.colors.whitePrimary};
  text-decoration: none;
  padding: 0px 30px;
  background-color: ${(props) => props.theme.colors.secondary};

  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out;
  display: inline-block;
  height: 40px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const ButtonWhatsapp = ({ Label }) => {
  const link_dafault =
    "https://wa.me/5511994230008?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estou%20interessado(a)%20em%20obter%20informa%C3%A7%C3%B5es%20sobre%20or%C3%A7amentos%20para%20o%20desenvolvimento%20do%20meu%20site.%20Poderiam%20me%20passar%20mais%20detalhes%2C%20por%20favor%3F%20Obrigado(a)!";
  return (
    <Button href={link_dafault} target="_blank">
      {Label}
    </Button>
  );
};
