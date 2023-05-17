import React, { useState } from "react";
import useBookContext from "../hooks/use-book-context";
const BookCreate = ({ onSubmit }) => {
  const { createBook } = useBookContext();
  const [title, setTitle] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Add Title</label>
        <input
          className="input"
          type="text"
          onChange={handleTitle}
          value={title}
        />
        <button className="button">Create Title</button>
      </form>
    </div>
  );
};

export default BookCreate;
