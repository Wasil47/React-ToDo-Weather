import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";

function ToDo() {
  const [noteList, setNoteList] = useState([]);
  function onAdd(newNote) {
    setNoteList((prevList) => {
      return [...prevList, newNote];
    });
  }
  function deleteNote(id) {
    setNoteList((prevList) => {
      return prevList.filter((note, index)=> index !== id);
    });
  }

  return (
    <div>
      <CreateArea onAdd={onAdd} />
      {noteList.map((n, i) => (
        <Note
          key={i}
          id={i}
          title={n.title}
          content={n.content}
          delete={deleteNote}
        />
      ))}
    </div>
  );
}

export default ToDo;
