import React, { useState, useEffect, createContext } from "react";

export const BooksContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(err => console.error("Error fetching books:", err));
  }, []);

  return (
    <BooksContext.Provider value={books}>
      {children}
    </BooksContext.Provider>
  );
};
