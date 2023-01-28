import {useState} from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

const App = () =>{
    const [books, setBook] = useState([]);
    const createBook = (title) => {
        const newBook = [
            ...books,
            {id: new Date().valueOf(), title: title}
        ];
        setBook(newBook);
    }
    
    return (
        <div className="app">
            <BookList books={books}/>
            <BookCreate createBook={createBook}/>
        </div>
    );
}

export default App;