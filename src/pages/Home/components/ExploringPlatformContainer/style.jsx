import styled, { keyframes } from "styled-components";

export const ContainerExploringPlatform = styled.section`
  width: 100%;
  padding: 100px 100px 50px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bgGreenprimary};

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
  width: 1000px;
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

export const ContentButtons = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .support {
    height: 40px;
    border: none;
    border-radius: 20px;
    padding: 0px 30px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.whitePrimary};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
  .flat {
    height: 40px;
    border: none;
    border-radius: 20px;
    padding: 0px 30px;
    background-color: transparent;
    color: ${(props) => props.theme.colors.whitePrimary};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${(props) => props.theme.colors.darkGreen};
    border: 2px solid ${(props) => props.theme.colors.darkGreen};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.whitePrimary};
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.darkGreen};
  span {
    font-weight: 800;
    color: ${(props) => props.theme.colors.darkGreen};
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
  font-size: 20px;
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
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 300px;
  height: 480px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.whitePrimary};
  box-shadow: 0 4px 4px #00000013;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    position: absolute;
    top: 10px;
    left: 20px;
    color: ${(props) => props.theme.colors.darkGreen};
  }
`;

export const ImgCard = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 20px 20px 0 0;
  background-color: red;
`;

export const TitleCard = styled.h3`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  width: 85%;
  margin: 20px 0 10px;
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const TextCard = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  width: 85%;
  margin: 0px 0 20px;
  color: ${(props) => props.theme.colors.darkGreen};
`;
