import React from "react";

const Note = ({ note, index }) => {
  return (
    <div className="note" key={index}>
      <p>{note.text}</p>
    </div>
  );
};

export default Note;
