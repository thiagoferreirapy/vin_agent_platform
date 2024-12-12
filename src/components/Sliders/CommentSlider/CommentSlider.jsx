import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { EffectFade, EffectFlip } from "swiper/modules";
import {
  ContentSlider,
  Title,
  Text,
  ImageOrder,
  Card,
  SwiperCustom,
  ContentProfile,
  InformationUser,
  ContentStars,
  ContentComment,
} from "./style";

import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaStar,
} from "react-icons/fa";

import { useRef } from "react";

export default function SliderOrder() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <SwiperCustom>
      <button className="custom-button-prev" ref={prevRef}>
        <FaChevronCircleLeft />
      </button>
      <button className="custom-button-next" ref={nextRef}>
        <FaChevronCircleRight />
      </button>

      <Swiper
        lazy={true}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
        effect="slide"
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <ContentSlider bg={false}>
            <Card>
              <ContentProfile>
                <ImageOrder src={"acai"} />
                <InformationUser>
                  <h4>Usuário de Android</h4>
                  <p>Empresa do Iphone</p>
                </InformationUser>
              </ContentProfile>
              <ContentStars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </ContentStars>
              <ContentComment>
                <Text>
                  O recurso de upload de documentação foi um divisor de águas
                  para nossa equipe. Conectar diretamente nosso banco de dados e
                  consultar informações em tempo real economiza muito tempo!
                </Text>
              </ContentComment>
            </Card>
          </ContentSlider>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider bg={false}>
            <Card>
              <ContentProfile>
                <ImageOrder src={"acai"} />
                <InformationUser>
                  <h4>Usuário de Android</h4>
                  <p>Empresa do Iphone</p>
                </InformationUser>
              </ContentProfile>
              <ContentStars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </ContentStars>
              <ContentComment>
                <Text>
                  Seria ótimo se a plataforma tivesse uma opção para integrar
                  mais facilmente com plataformas como Slack ou Microsoft Teams,
                  para consultas diretamente nos nossos canais de comunicação.
                </Text>
              </ContentComment>
            </Card>
          </ContentSlider>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider bg={false}>
            <Card>
              <ContentProfile>
                <ImageOrder src={"acai"} />
                <InformationUser>
                  <h4>Usuário de Android</h4>
                  <p>Empresa do Iphone</p>
                </InformationUser>
              </ContentProfile>
              <ContentStars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </ContentStars>
              <ContentComment>
                <Text>
                  O modelo de cobrança por usuário ativo é interessante, mas
                  gostaria de mais clareza sobre como é feito o cálculo quando a
                  empresa cresce rapidamente. Também vi que há a possibilidade
                  de integrar com CRMs, mas quais são as plataformas suportadas
                  atualmente?
                </Text>
              </ContentComment>
            </Card>
          </ContentSlider>
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlider bg={false}>
            <Card>
              <ContentProfile>
                <ImageOrder src={"acai"} />
                <InformationUser>
                  <h4>Usuário de Android</h4>
                  <p>Empresa do Iphone</p>
                </InformationUser>
              </ContentProfile>
              <ContentStars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </ContentStars>
              <ContentComment>
                <Text>
                  O suporte interno da empresa melhorou drasticamente. Agora,
                  perguntas simples que antes dependiam do TI são respondidas
                  instantaneamente pelo agente.
                </Text>
              </ContentComment>
            </Card>
          </ContentSlider>
        </SwiperSlide>
      </Swiper>
    </SwiperCustom>
  );
}
