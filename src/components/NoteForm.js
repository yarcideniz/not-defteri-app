import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Yeni not yaz..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

export default NoteForm;
