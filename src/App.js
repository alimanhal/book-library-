import logo from './logo.svg';
import './App.css';
import { BookProvider } from './BooksContext';
import Books from './components/Books';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BookDetails from './components/BookDetails';
function App() {
  return (
    <BookProvider>
    <Router>
      <Routes>
        <Route path='/' element={ <Books></Books> }></Route>
        <Route path='/books/:bookId' element={<BookDetails></BookDetails>}></Route>
      </Routes>
    </Router>


       
    </BookProvider>
   
  );
}

export default App;
