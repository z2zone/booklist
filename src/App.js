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

    const deleteBook = (id) => {
        const newBook = books.filter(book => {
            return book.id !== id;
        });
        setBook(newBook);
    }

    return (
        <div className="app">
            <BookList books={books} deleteBook={deleteBook}/>
            <BookCreate createBook={createBook}/>
        </div>
    );
}

export default App;