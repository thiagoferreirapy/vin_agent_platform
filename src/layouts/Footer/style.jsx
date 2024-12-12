import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 50px;
  padding: 100px 100px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.darkGreen};
  flex-wrap: wrap;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.055);
  position: relative;
  z-index: 1000;

  h2 {
    font-size: 50px;
    text-align: center;
    color: ${(props) => props.theme.colors.whitePrimary};
    margin-bottom: 40px;
  }
`;

export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterCard = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 90px;
  }

  h1 {
    text-align: left;
    color: aliceblue;
  }
`;

export const Text = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${(props) => props.theme.colors.darkGreen};
  text-align: left;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.whitePrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
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

export const TextAlign = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: ${(props) => props.theme.colors.darkGreen};
  text-align: center;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.whitePrimary};

  strong {
    text-align: center;
  }

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
export const TitleCard = styled.h5`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: ${(props) => props.theme.colors.darkGreen};
  text-align: left;
  margin-top: 50px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.whitePrimary};

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

export const ContentRights = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.whitePrimary};
  border-top: 1px solid ${(props) => props.theme.colors.whitePrimary};
`;
