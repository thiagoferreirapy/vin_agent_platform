import styled, { keyframes } from "styled-components";

export const ContainerInitialHome = styled.section`
  width: 100%;
  height: 580px;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 590px;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;

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
  font-size: 40px;
  font-weight: 600;
  line-height: 45px;
  margin-bottom: 30px;
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
  width: 580px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
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
export const ContentImage = styled.div`
  width: 550px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};

  img {
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
  }
`;
