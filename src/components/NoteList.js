import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id}>
          <span>{note.text}</span>
          <button onClick={() => deleteNote(note.id)}>Sil</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
