import styled, { keyframes } from "styled-components";

export const ContainerContact = styled.section`
  width: 100%;
  padding: 100px 100px 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
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

export const ContentInitialContact = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  button {
    color: ${(props) => props.theme.colors.darkGreen};
    text-decoration: none;
    width: 200px;
    padding: 0px 20px;
    background-color: ${(props) => props.theme.colors.bgGreenTerciary};
    border: 3px solid ${(props) => props.theme.colors.secondary};
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
    transition: background-color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.whitePrimary};
    }
  }
`;

export const Title = styled.h1`
  width: 85%;
  font-size: 30px;
  font-weight: 600;
  line-height: 35px;
  color: ${(props) => props.theme.colors.darkGreen};
  text-align: left;

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
  font-weight: 00;
  line-height: 22px;
  color: ${(props) => props.theme.colors.darkGreen};
  text-align: left;
  margin-top: 10px;
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

export const ContentFormEmail = styled.div`
  width: 500px;
  height: 490px;
  background-color: ${(props) => props.theme.colors.whiteSecondary};
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContentTitleForm = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;
`;

export const ContentIcon = styled.div`
  position: absolute;
  top: -45px;
  width: 70px;
  height: 117px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
`;
export const ContentTitle = styled.div`
  width: 100%;
  padding-left: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => props.theme.colors.darkGreen};
  h4 {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    line-height: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    width: 100%;
    height: 40px;
    border-radius: 7px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.whitePrimary};
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.colors.darkGreen};
    }
    &:active {
      background-color: ${(props) => props.theme.colors.darkGreen};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 7px;
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.darkGreen};
  color: ${(props) => props.theme.colors.darkGreen};
  font-size: 16px;
  font-weight: 400;
  &:focus {
    outline: none;
    border: 3px solid ${(props) => props.theme.colors.secondary};
  }
  &:hover {
    outline: none;
    border: 3px solid ${(props) => props.theme.colors.secondary};
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 7px;
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.darkGreen};
  color: ${(props) => props.theme.colors.darkGreen};
  font-size: 16px;
  font-weight: 400;
  &:focus {
    outline: none;
    border: 3px solid ${(props) => props.theme.colors.secondary};
  }
  &:hover {
    outline: none;
    border: 3px solid ${(props) => props.theme.colors.secondary};
  }
`;
