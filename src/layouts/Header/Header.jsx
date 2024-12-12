import { HeaderContainer, Navigation, NavLink, ContentAcounts } from "./style";
// import { ButtonWhatsapp } from "../../components/ButtonWhatsapp/Button";
import useWindowWidth from "../../hooks/ControlWinSize";
// import MenuMobile from "../../components/menu/MenuMobile";

import logo from "../../assets/logos/logo.svg";
export function Header() {
  const width = useWindowWidth();

  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="" />
        {width < 900 ? (
          <MenuMobile />
        ) : (
          <Navigation aria-label="Navegação principal">
            <ul>
              <li>
                <NavLink href="/">Início</NavLink>
              </li>
              <li>
                <NavLink href="/servicos">Sobre nós</NavLink>
              </li>
              <li>
                <NavLink href="/sobre">Beneficios</NavLink>
              </li>
              <li>
                <NavLink href="/projetos">Planos</NavLink>
              </li>
              <li>
                <NavLink href="/contato">Contato</NavLink>
              </li>
            </ul>
          </Navigation>
        )}
        <ContentAcounts>
          <button className="register">Criar conta</button>
          <button className="login">Entrar na conta</button>
        </ContentAcounts>
      </HeaderContainer>
    </>
  );
}
