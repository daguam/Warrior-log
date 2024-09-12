import React from "react";
import Note from "./Note";
import notes from "../notes";
import Header from "./Header";

function Notes() {
  return (
    <div>
      <Header text="Ideas" />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
    </div>
  );
}
export default Notes;
