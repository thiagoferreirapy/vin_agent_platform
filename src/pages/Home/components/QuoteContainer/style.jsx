import styled, { keyframes } from "styled-components";

export const ContainerQuote = styled.section`
  width: 100%;
  padding: 70px 100px 70px;
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

export const Title = styled.h1`
  width: 85%;
  font-size: 35px;
  font-weight: 400;
  line-height: 38px;
  color: ${(props) => props.theme.colors.darkGreen};
  border-left: 4px solid ${(props) => props.theme.colors.terciaryGreen};
  text-align: left;
  padding: 10px 25px;

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
