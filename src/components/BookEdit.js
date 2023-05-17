import React, { useState } from "react";
import useBookContext from "../hooks/use-book-context";

const BookEdit = ({ book, onSubmit }) => {
  const { editBookById } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={submitHandler}>
      <label>Title</label>
      <input className="input" onChange={handleTitle} value={title} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
