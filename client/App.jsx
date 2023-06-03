import React from 'react';
import styled from 'styled-components';
import Info from './components/Info';

const MainContainer = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const App = () => {
  return (
    <MainContainer>
      <h1>Hello!</h1>
      <Info />
    </MainContainer>
  );
};

export default App;
