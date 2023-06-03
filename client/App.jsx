import React from 'react';
import styled from 'styled-components';
import Info from './components/Info';
import Notes from './components/Notes';

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
      <Notes />
    </MainContainer>
  );
};

export default App;
