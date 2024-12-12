import styled, { keyframes } from "styled-components";

export const ContainerAbout = styled.section`
  width: 100%;
  padding: 0 100px;
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
  width: 850px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 70px;

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
  line-height: 45px;
  margin-bottom: 10px;
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

export const ContentCardsText = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContentCard = styled.div`
  width: 400px;
`;
export const TitleCard = styled.h2`
  font-size: 25px;
  color: ${(props) => props.theme.colors.darkGreen};
`;
