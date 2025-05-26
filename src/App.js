import './App.css';
import { BookProvider } from './BooksContext';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path='/books' element={<Navigate to ="/"/>}></Route>
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </BookProvider>
    
  );
}

export default App;
