import React, { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBookContext from "./hooks/use-book-context";

const App = () => {
  const { fetchBooks } = useBookContext();
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
