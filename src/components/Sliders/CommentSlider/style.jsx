import styled from "styled-components";

export const ContentSlider = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  z-index: -2;
  cursor: grab;
  background-color: transparent;
  &:active {
    cursor: grabbing;
  }

  div {
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-size: 25px;
  font-weight: 900;
  text-align: center;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
`;

export const Card = styled.div`
  width: 480px;
  border-radius: 10px;
  border: 2px solid black;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ContentProfile = styled.div`
  width: 100%;
  display: flex;
`;

export const ImageOrder = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #5f5959;
  margin: 0;
`;

export const InformationUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  margin-left: 20px;
  color: ${(props) => props.theme.colors.darkGreen};

  h4 {
    font-size: 16px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const ContentStars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 8px;
  margin-top: 10px;
  padding-left: 5px;
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const ContentComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  border-left: 3px solid ${(props) => props.theme.colors.darkGreen};
  margin-top: 10px;
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const SwiperCustom = styled.div`
  width: 100%;
  position: relative;

  .custom-button-prev,
  .custom-button-next {
    position: absolute;
    left: 10px;
    z-index: 10;
    background: none;
    border: none;
    cursor: pointer;
    color: #2a3a39;
    font-size: 24px;
  }

  .custom-button-prev {
    top: 33%;
    font-size: 35px;
  }

  .custom-button-next {
    top: 43%;
    font-size: 35px;
  }

  .swiper-pagination-bullet {
    background-color: var(--swiper-pagination-color, #ffffff9d);
  }
`;
