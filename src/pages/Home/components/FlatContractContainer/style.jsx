import styled, { keyframes } from "styled-components";

export const ContainerFlatContract = styled.section`
  width: 100%;
  padding: 100px 100px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.whitePrimary};

  @media (max-width: 1100px) {
    padding: 0 50px;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    height: auto;
    padding-top: 100px;
  }
  @media (max-width: 590px) {
    flex-direction: column;
    height: auto;
    padding: 100px 20px;
  }
`;

export const ContentSloganTitle = styled.div`
  width: 740px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media (max-width: 1100px) {
    width: 400px;
  }
  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 750px) {
    width: 500px;
    text-align: center;
    align-items: center;
    margin-bottom: 100px;
  }
  @media (max-width: 680px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 590px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.darkGreen};
  span {
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 900px) {
    font-size: 35px;
    line-height: 40px;
  }
  @media (max-width: 680px) {
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${(props) => props.theme.colors.darkGreen};
  @media (max-width: 900px) {
    width: 300px;
  }
  @media (max-width: 750px) {
    width: 500px;
    text-align: center;
  }
  @media (max-width: 680px) {
    width: 100%;
    text-align: center;
  }
`;

export const ContentCardsPlatform = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContent = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.darkGreen};
  text-align: left;
`;

export const ContentCards = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const Card = styled.div`
  width: 350px;
  padding-bottom: 25px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.bgGreenprimary};
  border: 2px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.secondary
        : props.theme.colors.bgGreenSecondary};
  box-shadow: 2px 1px 6px #00000013;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contentTitle {
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    background-color: ${(props) =>
      props.selected
        ? props.theme.colors.secondary
        : props.theme.colors.bgGreenSecondary};
    color: ${(props) =>
      props.selected
        ? props.theme.colors.whitePrimary
        : props.theme.colors.secondary};
    border-radius: 18px 18px 0 0;
    box-shadow: 2px 1px 6px #00000013;
    border: 2px solid
      ${(props) =>
        props.selected
          ? props.theme.colors.secondary
          : props.theme.colors.bgGreenSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleCard = styled.h3`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  width: 90%;
  margin: 20px 0 0;
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const TextCard = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 90%;
  color: ${(props) => props.theme.colors.darkGreen};

  span {
    color: ${(props) => props.theme.colors.grayPrimary};
    text-decoration: dotted;
  }
`;

export const ContentForSale = styled.div`
  display: flex;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: left;
  margin-top: 25px;
  span {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    width: 25%;
    margin-top: 30px;
    color: ${(props) => props.theme.colors.grayPrimary};
    text-decoration: line-through;
  }
`;

export const TextPrice = styled.i`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 90%;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.grayPrimary};
  text-decoration: line-through;
`;

export const TextValue = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 90%;
  color: ${(props) => props.theme.colors.darkGreen};

  strong {
    font-size: 35px;
    font-weight: 700;
  }
`;

export const SubTextCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  width: 90%;
  color: ${(props) => props.theme.colors.darkGreen};

  span {
    color: ${(props) => props.theme.colors.grayPrimary};
  }
`;

export const ButtonCard = styled.button`
  width: 90%;
  height: 40px;
  margin-top: 50px;
  margin-bottom: 10px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.secondary : "transparent"};
  color: ${(props) =>
    props.selected
      ? props.theme.colors.whitePrimary
      : props.theme.colors.darkGreen};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.selected
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    border: 2px solid
      ${(props) =>
        props.selected
          ? props.theme.colors.primary
          : props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.whitePrimary};
  }
`;

export const LineDivisor = styled.div`
  width: 90%;
  height: 1.5px;
  margin: 30px 0;
  background-color: ${(props) => props.theme.colors.graySecondary};
`;
export const ContentAdvantage = styled.div`
  width: 90%;
  display: flex;
  align-items: self-start;
  justify-content: left;
  gap: 10px;
  margin-bottom: 10px;
  img {
    width: 15px;
    height: 20px;
    object-fit: contain;
  }
`;

export const ContetPromotion = styled.div`
  width: 27%;
  height: 34px;
  transform: rotate(-15deg);
  position: relative;
  img {
    width: 100%;
  }

  p {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.whitePrimary};
  }
`;

export const ContentCardSlider = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 550px;
  margin-top: 150px;
`;

export const TitleComment = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 35px;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 20px;
  color: ${(props) => props.theme.colors.darkGreen};
  span {
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const TextComment = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 55%;
  margin-left: 20px;
  color: ${(props) => props.theme.colors.darkGreen};

  span {
    color: ${(props) => props.theme.colors.grayPrimary};
    text-decoration: dotted;
  }
`;
