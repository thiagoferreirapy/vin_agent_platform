import {
  ContainerFlatContract,
  ContentSloganTitle,
  Title,
  Text,
  ContentCardsPlatform,
  ContentCards,
  Card,
  TitleCard,
  TextCard,
  ContentForSale,
  TextPrice,
  TextValue,
  SubTextCard,
  ButtonCard,
  LineDivisor,
  ContentAdvantage,
  ContetPromotion,
  ContentCardSlider,
  TitleComment,
  TextComment,
} from "./style";

import icon_checked from "../../../../assets/icons/icon_checked.svg";
import icon_close from "../../../../assets/icons/close.svg";

import forsale from "../../../../assets/icons/forsale.svg";
import SliderOrder from "../../../../components/Sliders/CommentSlider/CommentSlider";
export function FlatContract() {
  return (
    <ContainerFlatContract>
      <ContentSloganTitle>
        <Title>
          Escolha seu plano, escolha ser <span>PRO</span>
        </Title>
        <Text>
          Comece com o pé direito e aproveite sem receios! Oferecemos uma
          garantia de 30 dias para solicitar o reembolso e um plano totalmente
          gratuito, garantindo uma experiência sem riscos para você.
        </Text>
      </ContentSloganTitle>
      <ContentCardsPlatform>
        <ContentCards>
          <Card>
            <div className="contentTitle">TOALMENTE GRATUITO</div>
            <TitleCard>TOTAL FREE</TitleCard>
            <TextCard>Use e abuse sem precisar pagar</TextCard>
            <ContentForSale>
              <span>R$ 10,00</span>
              <ContetPromotion>
                <img src={forsale} alt="" /> <p>100% FREE</p>{" "}
              </ContetPromotion>
            </ContentForSale>
            <TextValue>
              R$ <strong>0,00</strong>/mês*
            </TextValue>
            <SubTextCard>
              *Aproveite nossos recursos de forma 100% gratuita, sem se
              preocupar com mensalidade ou gastos adicionais.
            </SubTextCard>
            <ButtonCard>Selecionar Plano</ButtonCard>
            <SubTextCard>
              <span>R$ 0,00/mês* para renovar</span>
            </SubTextCard>
            <LineDivisor />
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
              </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_close} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, consectetur</SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_close} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, conse </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_close} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, conse </SubTextCard>
            </ContentAdvantage>
            {/* <ContentForSale>
                <ContetPromotion><img src={forsale} alt="" /> <p>100% FREE</p> </ContetPromotion>
              </ContentForSale> */}
          </Card>
          <Card selected>
            <div className="contentTitle">PLANO PRÓ</div>
            <TitleCard>SEJA PRÓ</TitleCard>
            <TextCard>Tenha ainda mais possibilidades com o Vin</TextCard>
            <ContentForSale>
              <span>R$ 50,00</span>
              <ContetPromotion>
                <img src={forsale} alt="" /> <p>50% FREE</p>{" "}
              </ContetPromotion>
            </ContentForSale>
            <TextValue>
              R$ <strong>25,00</strong>/mês*
            </TextValue>
            <SubTextCard>
              *Assine o Vin Pró e aproveite benefícios exclusivos, como suporte
              dedicado, respostas mais rápidas e funcionalidades avançadas.
            </SubTextCard>
            <ButtonCard selected>Selecionar Plano</ButtonCard>
            <SubTextCard>
              <span>R$ 0,00/mês* para renovar</span>
            </SubTextCard>
            <LineDivisor />
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
              </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, consectetur</SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, conse </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_close} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, conse </SubTextCard>
            </ContentAdvantage>
          </Card>
          <Card>
            <div className="contentTitle">PLANO PREMIUM</div>
            <TitleCard>VIN PREMIUM</TitleCard>
            <TextCard>O melhor do Vin para você!</TextCard>
            <ContentForSale>
              <span>R$ 80,00</span>
              <ContetPromotion>
                <img src={forsale} alt="" /> <p>30% FREE</p>{" "}
              </ContetPromotion>
            </ContentForSale>
            <TextValue>
              R$ <strong>50,00</strong>/mês*
            </TextValue>
            <SubTextCard>
              *Aproveite 100% do Vin com respostas mais rápidas, suporte
              dedicado e funcionalidades avançadas para otimizar sua
              experiência.
            </SubTextCard>
            <ButtonCard>Selecionar Plano</ButtonCard>
            <SubTextCard>
              <span>R$ 0,00/mês* para renovar</span>
            </SubTextCard>
            <LineDivisor />
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
              </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, consectetur</SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, conse </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet </SubTextCard>
            </ContentAdvantage>
            <ContentAdvantage>
              <img src={icon_checked} alt="Icone de selecionado" />
              <SubTextCard>Lorem ipsum dolor sit amet, conse </SubTextCard>
            </ContentAdvantage>
          </Card>
        </ContentCards>
      </ContentCardsPlatform>
      <ContentCardSlider>
        <TitleComment>
          Depoimentos: Como o Vin Agent está <br /> transformando Empresas e{" "}
          <br /> Revolucionando Transformações
        </TitleComment>
        <TextComment>
          Explore histórias inspiradoras de como nossos clientes utilizaram o
          Vin Agent para transformar seus processos, melhorar a eficiência e
          alcançar resultados excepcionais. Cada depoimento revela o impacto
          real de nossa IA personalizada nas operações empresariais.
        </TextComment>
        <SliderOrder />
      </ContentCardSlider>
    </ContainerFlatContract>
  );
}
