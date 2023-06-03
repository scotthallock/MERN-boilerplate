import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 1rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const ListTitle = styled.div`
  padding: 0.5rem 0;
  font-size: 1.25rem;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  &:before {
    content: '✔️ ';
  }
`;

const Info = () => {
  return (
    <InfoContainer>
      <ListTitle>
        This is a <b>MERN</b> template.
      </ListTitle>
      <List>
        <ListItem>MongoDB</ListItem>
        <ListItem>Express</ListItem>
        <ListItem>React</ListItem>
        <ListItem>Node</ListItem>
        <ListItem>...and as a bonus, 💅 styled-components</ListItem>
      </List>
    </InfoContainer>
  );
};

export default Info;
