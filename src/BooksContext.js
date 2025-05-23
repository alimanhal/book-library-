  import React, {useState, useEffect, createContext, Children} from "react";

  export const BooksCintext  = createContext();

  export const BookProvider =  ({children}) => {
    const [books, setBooks] = useState([])


      useEffect(() => {

        fetch("/books.json").then(response)
      },[]);

      return(
        <BookProvider.Provider value={books}>{children}</BookProvider.Provider>
      );

  }

