import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px; 
  width: 100%; 
  margin: 0;
  padding: 0; 
`;

const MainLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;