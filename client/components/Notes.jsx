import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NotesContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
`;

const ListItem = styled.li`
  border-bottom: 1px solid gray;
`;

const Notes = () => {
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([]);

  // Load the notes stored in the database
  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch('/notes');
      const notes = await res.json();
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  // Create a new note
  const saveNote = async () => {
    const res = await fetch('/notes', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ content: input }),
    });
    const note = await res.json();
    return note;
  };

  return (
    <NotesContainer>
      <b>Save a note to the database</b>
      <div>
        <Input
          type="text"
          placeholder="new note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key !== 'Enter') return;
            const newNote = await saveNote();
            setNotes([...notes, newNote]);
            setInput('');
          }}
        />
        <Button onClick={saveNote}>Submit</Button>
      </div>
      <List>
        {notes.map(({ _id, content, createdAt }) => (
          <ListItem key={_id}>
            <div>{content}</div>
            <div>({createdAt})</div>
          </ListItem>
        ))}
      </List>
    </NotesContainer>
  );
};

export default Notes;
